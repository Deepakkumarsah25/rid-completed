require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const session = require("express-session");
const mongoose = require('mongoose');
const passport = require("passport");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");
const helmet = require('helmet');
const MongoStore = require('connect-mongo'); // Only require, no session parameter
const cors = require("cors");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const fileUpload = require("express-fileupload");

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();
const port = process.env.PORT || 9191;

// ========== DATABASE CONNECTION ==========
// Use the correct environment variable name from your .env file
const mongoUrl = process.env.MONGO_URI || 'mongodb://localhost:27017/booklibrary';

console.log('🔧 Attempting to connect to MongoDB...');
console.log('🔧 Connection URL:', mongoUrl.replace(/\/\/([^:]+):([^@]+)@/, '//***:***@')); // Hide credentials

mongoose.connect(mongoUrl)
.then(async () => {
    console.log('✅ MongoDB Connected Successfully');
    
    const User = require('./models/EbookUser');
    await User.createDefaultAdmin();
})
.catch(err => {
    console.error('❌ MongoDB Connection Error Details:', err.message);
    console.error('💡 Check if:');
    console.error('   1. Your Atlas cluster is running (check at https://cloud.mongodb.com)');
    console.error('   2. Your IP is whitelisted in Atlas Network Access');
    console.error('   3. Database user credentials are correct');
    process.exit(1);
});


// ========== SESSION CONFIGURATION ==========
app.use(session({
    secret: process.env.SESSION_SECRET || crypto.randomBytes(64).toString("hex"),
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: mongoUrl,
        collectionName: 'sessions',
        ttl: 24 * 60 * 60 // 1 day in seconds
    }),
    cookie: {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production'
    }
}));

// ========== SECURITY MIDDLEWARE ==========
app.use(helmet({
    contentSecurityPolicy: false // Temporarily disable for debugging
}));

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

app.use('/ebook/uploads', express.static(path.join(__dirname, 'public/uploads')));

// ========== CREATE UPLOAD DIRECTORIES ==========
const ensureUploadDirs = () => {
    const directories = [
        'public/uploads/pdfs',
        'public/uploads/covers'
    ];

    directories.forEach(dir => {
        const fullPath = path.join(__dirname, dir);
        if (!fs.existsSync(fullPath)) {
            fs.mkdirSync(fullPath, { recursive: true });
            console.log(`✅ Created directory: ${fullPath}`);
        } else {
            console.log(`📁 Directory exists: ${fullPath}`);
        }
    });
};
ensureUploadDirs();

// ========== ADDITIONAL MIDDLEWARE ==========
const configureMiddleware = () => {
  app.use(cookieParser());
  
  app.use(
    fileUpload({
      useTempFiles: true,
      tempFileDir: "/tmp/",
      limits: { fileSize: 100 * 1024 * 1024 },
    })
  );
  
  app.use(passport.initialize());
  app.use(passport.session());
  require("./config/passport")(passport);
};

// ========== VIEW ENGINE SETUP ==========
const configureViews = () => {
  app.set("view engine", "ejs");
  app.set("views", [path.join(__dirname, "views", 'ebook'), path.join(__dirname, "views")]);
  app.use(express.static(path.join(__dirname, "public")));
};

// ========== GLOBAL VARIABLES MIDDLEWARE ==========
app.use((req, res, next) => {
    res.locals.currentPath = req.path;
    res.locals.success = req.query.success;
    res.locals.error = req.query.error;
    res.locals.user = req.user || req.session.user || null;
    res.locals.basePath = '/ebook';
    next();
});

// ========== INITIALIZE SECURITY STORAGE ==========
app.locals.securityEvents = new Map();
app.locals.pdfTokens = new Map();

// ========== EBOOK ROUTES ==========
app.use('/ebook', require('./routes/pdfRoutes'));
app.use('/ebook', require('./routes/authebookRoutes'));

// ========== MAIN APPLICATION ROUTES ==========
const configureRoutes = () => {
  // API Routes
  const organisationRoutes = require("./routes/organisation");
  const userRoutes = require("./routes/userRoutes");
  const authRoutes = require("./routes/authRoutes");
  const adminRoutes = require("./routes/admin");
  const verifyRoutes = require("./routes/verify");
  const authenticateJWT = require("./middleware/authMiddleware");

  // ========== CERTIFICATE ROUTES ==========
  const applicationRoutes = require("./routes/applicationRoutes");
  app.use("/api", applicationRoutes);

  app.use("/user", userRoutes);
  app.use("/auth", authRoutes);
  app.use("/admin", adminRoutes);
  app.use("/verify", verifyRoutes);
  app.use("/api/organisation", organisationRoutes);
  app.use("/api/user", userRoutes);

  // ========== SECURE PDF ACCESS ==========
  app.use('/ebook/uploads/pdfs', (req, res, next) => {
      const referer = req.get('Referer');
      if (!referer || (!referer.includes('/ebook/secure-viewer/') && !referer.includes('/ebook/download/'))) {
          return res.status(403).json({ 
              error: 'Access denied',
              message: 'Direct file access is not allowed. Please use the secure viewer.'
          });
      }
      next();
  });

  // ========== RTS INTEGRATION ==========
  app.use("/RTS/public", express.static(path.join(__dirname, "RTS", "public")));
  app.use("/rts", express.static(path.join(__dirname, "RTS", "public")));
  
  app.get("/rts/main", (req, res) => {
    res.sendFile(path.join(__dirname, "RTS", "public", "main.html"));
  });

  // ========== VIEW ROUTES ==========
  const Organisation = require("./models/Organisation");
  const Book = require("./models/Book");

  app.get("/books", async (req, res) => {
    try {
      const books = await Book.find({});
      res.render("books", { moreBooks: books });
    } catch (err) {
      console.error(err);
      res.status(500).send("Error fetching books");
    }
  });

  app.get("/flipbook", (req, res) => {
    res.render("flipbook", {
      title: "RID Button Flipbook",
      pdfUrl: "/pdf/pdf.pdf",
      downloadUrl: "/images/pdf.rar",
    });
  });

  app.get("/organization-dashboard", authenticateJWT, async (req, res) => {
    try {
      const organization = await Organisation.findOne();
      if (!organization) return res.status(404).send("Organization not found");
      res.render("organizationDashboard", { organization });
    } catch (err) {
      console.error(err);
      res.status(500).send("Server Error");
    }
  });

  app.get("/organization-dashboard/:id", authenticateJWT, async (req, res) => {
    try {
      const organisationId = req.params.id;
      const organisation = await Organisation.findById(organisationId);
      if (!organisation)
        return res.status(404).json({ error: "Organization not found" });
      res.render("organization-dashboard", { organisation });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  });

  // ========== STATIC HTML ROUTES ==========
  const roleMiddleware = (role) => (req, res, next) => {
    if (req.user && req.user.role === role) return next();
    res.redirect("/login");
  };

  app.get("/organisation", authenticateJWT, roleMiddleware("organisation"), (req, res) => {
    res.render("register-org");
  });

  app.get("/teacher", authenticateJWT, roleMiddleware("teacher"), (req, res) => {
    res.sendFile(path.join(__dirname, "public", "teacher.html"));
  });

  app.get("/student", authenticateJWT, roleMiddleware("student"), (req, res) => {
    res.sendFile(path.join(__dirname, "public", "student.html"));
  });

  app.get("/admin", authenticateJWT, roleMiddleware("admin"), (req, res) => {
    res.sendFile(path.join(__dirname, "public", "Admin/admin.html"));
  });

  app.get("/reset-password", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "Reset-Password/reset-password.html"));
  });

  app.get("/forgot-password", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "Forgot-Password/forgot-password.html"));
  });

  app.get("/form", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "Signup/form.html"));
  });

  app.get("/onlineTest", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "component/onlineTest.html"));
  });

  app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "Login/login.html"));
  });

  app.get("/verify", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "Certificate-Verification/verify.html"));
  });

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  });

  app.get("/searchResult", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "searchResult.html"));
  });

  app.get("/serverpdf", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "serverpdf.html"));
  });

  // ========== CERTIFICATE STATIC ROUTES ==========
  app.get("/certificate", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "Certificate-Verification/certificate.html"));
  });

  app.get("/apply-certificate", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "Certificate-Verification/Applay-certificate.html"));
  });

  app.get("/ebook", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "ebook.html"));
  });

  app.get("/get-pdf", (req, res) => {
    const pdfPath = path.join(__dirname, "ebookdata", "azenglish.pdf");
    const pdfStream = fs.createReadStream(pdfPath);
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "inline");
    pdfStream.pipe(res);
  });

  // ========== LOGOUT ROUTE ==========
  app.get("/logout", (req, res) => {
    if (req.session) {
      req.session.destroy((err) => {
        if (err) return res.status(500).send("Could not log out.");
        res.redirect("/login");
      });
    } else {
      res.json({ message: "Logged out successfully" });
    }
  });

  // ========== DURATION API ==========
  app.get("/api/duration", (req, res) => {
    const duration = process.env.DURATION;
    if (!duration)
      return res.status(500).json({ error: "Duration not set in .env file" });
    res.json({ duration });
  });

  // ========== CATCH-ALL 404 ==========
  app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, "public", "404/404.html"));
  });
};

// ========== CONFIGURE THE APPLICATION ==========
configureMiddleware();
configureViews();
configureRoutes();

// ========== START SERVER ==========
app.listen(port, () => {
  console.log(`\n✅ Server is running on http://localhost:${port}`);
  
});