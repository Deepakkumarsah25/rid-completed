const express = require("express");
const path = require("path");
const session = require("express-session");
const mongoose = require('mongoose');
const passport = require("passport");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const helmet = require('helmet');
const MongoStore = require('connect-mongo');
const cors = require("cors");
const crypto = require("crypto");
const fs = require("fs");
const fileUpload = require("express-fileupload");

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();
const port = process.env.PORT || 9191;


const http = require("http");
const server = http.createServer(app);


const mongoUrl = process.env.MONGODB_URI;

console.log('🔗 Attempting MongoDB Atlas connection...');

mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
})
.then(async () => {
    console.log('✅ MongoDB Atlas Connected Successfully');
   
    
    // Check if 'applications' collection exists
    const collections = await mongoose.connection.db.listCollections().toArray();
    const appCollectionExists = collections.some(c => c.name === 'applications');
    
    if (!appCollectionExists) {
        console.log('📝 Creating applications collection...');
        // Create collection if it doesn't exist
        await mongoose.connection.db.createCollection('applications');
        console.log('✅ Created applications collection');
    }
    
    // Create indexes for better performance
    const Application = require('./models/Application');
    await Application.createIndexes();
    
})
.catch(err => {
    console.error(' MongoDB Atlas Connection Error:', err.message);
    console.error(' Troubleshooting Steps:');
    console.error('   1. Check your MongoDB Atlas cluster is running');
    console.error('   2. Verify IP is whitelisted in Network Access');
    console.error('   3. Check username/password in connection string');
    console.error('   4. Check database name in connection string');
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

// ========== WORKSHOP ROUTES (MOVE HERE) ==========
const workshopRoutes = require('./routes/workshopRoutes');
app.use('/api/workshop', workshopRoutes);

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


// Socket.IO
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: { origin: "*" }
});

// socket logic
let onlineTestUsers = 0;
io.on("connection", (socket) => {
  onlineTestUsers++;
  io.emit("onlineUsers", onlineTestUsers);

  socket.on("disconnect", () => {
    onlineTestUsers--;
    io.emit("onlineUsers", onlineTestUsers);
  });
});

// 🔥 IMPORTANT PART
app.listen = function () {
  return server.listen.apply(server, arguments);
};




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

  // ========== WORKSHOP FORM PAGE ==========
  app.get("/workshop-form", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "workshop/form.html"));
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

// ======= RTS AUTH ROUTES (MUST BE BEFORE 404) =======
const signupRoutes = require("./RTS/routes/signupRoutes.js");
const loginRoutes  = require("./RTS/routes/loginRoutes.js");
const forgotPasswordRoutes = require("./RTS/routes/forgotPasswordRoutes.js");

app.use("/api", signupRoutes);
app.use("/api", loginRoutes);
app.use("/api", forgotPasswordRoutes);


// ======= MAIN ROUTES (404 is inside this) =======
configureRoutes();

// ========== START SERVER ==========
app.listen(port, () => {
  console.log(`\n✅ Server is running on http://localhost:${port}`);
});
