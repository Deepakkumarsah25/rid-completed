const path = require("path");
const fs = require("fs");
const Application = require("../models/Application");
const nodemailer = require("nodemailer");
const PDFDocument = require("pdfkit");
// ✅ ALWAYS absolute path
const signatureImagePath = path.resolve(__dirname, "../assets/sign.png");
const stampImagePath = path.resolve(__dirname, "../assets/stamp.png");

// 🔍 Debug log (ek baar check kar lena)
console.log("Signature exists:", fs.existsSync(signatureImagePath));
console.log("Stamp exists:", fs.existsSync(stampImagePath));

// nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD
  }
});

// Email sending helper
async function sendMail(to, subject, html) {
  return transporter.sendMail({
    from: `"RID Bharat" <${process.env.SMTP_FROM_EMAIL}>`,
    to,
    subject,
    html
  });
}

// Helper function to format date
function formatDate(dateStr) {
  if (!dateStr) return new Date().toLocaleDateString();
  const date = new Date(dateStr);
  const day = date.getDate();
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  return `${day}${getOrdinalSuffix(day)} ${month}, ${year}`;
}

function getOrdinalSuffix(day) {
  if (day > 3 && day < 21) return 'th';
  switch (day % 10) {
    case 1: return "st";
    case 2: return "nd";
    case 3: return "rd";
    default: return "th";
  }
}

// Apply Certificate
exports.applyCertificate = async (req, res) => {
  try {
    const {
      fullName, fatherName, dob, course, certificateType,
      phone, email, duration, durationUnit, startDate, endDate, projectName
    } = req.body;

    // Validation
    if (!fullName || !email || !phone || !course || !certificateType || !duration || !durationUnit) {
      return res.status(400).json({ 
        success: false, 
        message: "Please fill all required fields" 
      });
    }

    // Generate unique ID
    const appId = "RIDAPP" + Math.floor(10000000 + Math.random() * 90000000);

    // Save to database with duration and unit
    const newApp = await Application.create({
      appId,
      fullName,
      fatherName,
      dob,
      course,
      certificateType,
      phone,
      email,
      duration,
      durationUnit,
      startDate,
      endDate,
      projectName
    });

    // Send email to user
    const userHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #16a34a;">RID - Application Received Successfully!</h2>
        <p>Dear <strong>${fullName}</strong>,</p>
        <p>Thank you for applying for certificate at RID Bharat.</p>
        <div style="background: #f0f9ff; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #166534;">Your Application Details:</h3>
          <p><strong>Application ID:</strong> ${appId}</p>
          <p><strong>Certificate Type:</strong> ${certificateType === 'CERTIFICATE_OF_COMPLETION' ? 'Certificate of Completion' : 'Experience Letter'}</p>
          <p><strong>Course:</strong> ${course}</p>
          <p><strong>Duration:</strong> ${duration} ${durationUnit}</p>
          <p><strong>Status:</strong> <span style="color: #d97706;">PENDING VERIFICATION</span></p>
        </div>
        <p>Your application is under review by admin. You'll receive another email once your certificate is verified.</p>
        <p>You can check your application status at: 
          <a href="${req.protocol}://${req.get('host')}/verify" 
             style="color: #2563eb; text-decoration: none; font-weight: bold;">
            Verify Certificate
          </a>
        </p>
        <p><strong>Keep your Application ID safe for future reference.</strong></p>
        <hr style="margin: 20px 0;">
        <p style="color: #6b7280; font-size: 14px;">
          Best Regards,<br>
          RID Bharat Team<br>
          TWKSAA Welfare Foundation
        </p>
      </div>
    `;

    await sendMail(email, `RID - Application Received (ID: ${appId})`, userHtml);

    // Send email to admin
    const adminHtml = `
      <div style="font-family: Arial, sans-serif;">
        <h2 style="color: #dc2626;">📋 New Certificate Application Received</h2>
        <div style="background: #fef2f2; padding: 15px; border-radius: 8px;">
          <h3>Applicant Details:</h3>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Application ID:</strong> ${appId}</p>
          <p><strong>Certificate Type:</strong> ${certificateType === 'CERTIFICATE_OF_COMPLETION' ? 'Certificate of Completion' : 'Experience Letter'}</p>
          <p><strong>Course:</strong> ${course}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Project:</strong> ${projectName}</p>
          <p><strong>Duration:</strong> ${duration} ${durationUnit}</p>
          <p><strong>Certificate Type Code:</strong> ${certificateType}</p>
        </div>
        <div style="margin: 25px 0; text-align: center;">
          <a href="${req.protocol}://${req.get('host')}/api/verify-admin/${appId}" 
             style="background: #16a34a; color: white; padding: 12px 24px; 
                    text-decoration: none; border-radius: 6px; font-weight: bold;">
            ✅ Click to Verify & Issue Certificate
          </a>
        </div>
        <p style="color: #6b7280;">This link will verify the application and generate certificate.</p>
      </div>
    `;

    await sendMail(process.env.SMTP_USERNAME, `New Application: ${appId} - ${fullName}`, adminHtml);

    return res.status(201).json({ 
      success: true, 
      appId,
      message: "Application submitted successfully!"
    });
  } catch (err) {
    console.error("applyCertificate error:", err);
    return res.status(500).json({ 
      success: false, 
      error: "Server error. Please try again." 
    });
  }
};

// Admin Verify
exports.adminVerify = async (req, res) => {
  try {
    const { appId } = req.params;
    
    const app = await Application.findOne({ appId });
    
    if (!app) {
      return res.status(404).send(`
        <div style="text-align: center; padding: 50px;">
          <h2 style="color: #dc2626;">❌ Application Not Found</h2>
          <p>Application ID ${appId} does not exist.</p>
          <a href="/verify" style="color: #2563eb;">Go to Verification Page</a>
        </div>
      `);
    }

    // Update status
    app.status = "VERIFIED";
    app.verifiedAt = new Date();
    await app.save();

    // Generate certificate PDF based on certificate type
    const certsDir = path.join(__dirname, "../certificates");
    if (!fs.existsSync(certsDir)) {
      fs.mkdirSync(certsDir, { recursive: true });
    }
    const filePath = path.join(certsDir, `${appId}.pdf`);
    
    // Choose certificate type based on certificateType field
    if (app.certificateType === 'CERTIFICATE_OF_COMPLETION') {
      await generateCompletionCertificatePDF(app, filePath);
    } else if (app.certificateType === 'EXPERIENCE_LETTER') {
      await generateExperienceLetterPDF(app, filePath);
    } else {
      // Default to completion certificate
      await generateCompletionCertificatePDF(app, filePath);
    }

    // Send email to user about verification
    const userHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #16a34a;">🎉 Your Certificate is Verified!</h2>
        <p>Dear <strong>${app.fullName}</strong>,</p>
        <p>Congratulations! Your certificate has been verified and is now ready for download.</p>
        <div style="background: #f0fdf4; padding: 20px; border-radius: 10px; margin: 20px 0; text-align: center;">
          <h3 style="color: #166534;">Certificate Details</h3>
          <p><strong>Application ID:</strong> ${appId}</p>
          <p><strong>Certificate Type:</strong> ${app.certificateType === 'CERTIFICATE_OF_COMPLETION' ? 'Certificate of Completion' : 'Experience Letter'}</p>
          <p><strong>Course:</strong> ${app.course}</p>
          <p><strong>Project:</strong> ${app.projectName}</p>
          <p><strong>Duration:</strong> ${app.duration} ${app.durationUnit || 'weeks'}</p>
          <div style="margin: 25px 0;">
            <a href="${req.protocol}://${req.get('host')}/api/download/${appId}" 
               style="background: linear-gradient(135deg, #16a34a, #22c55e); 
                      color: white; padding: 15px 30px; text-decoration: none; 
                      border-radius: 8px; font-weight: bold; display: inline-block;">
              📥 Download Certificate (PDF)
            </a>
          </div>
          <p>Or visit: <a href="${req.protocol}://${req.get('host')}/verify">RID Verification Page</a></p>
        </div>
        <p><strong>Note:</strong> You can also download your certificate by entering your Application ID on the verification page.</p>
        <hr>
        <p style="color: #6b7280; font-size: 14px;">
          Best Regards,<br>
          RID Bharat Team
        </p>
      </div>
    `;

    await sendMail(app.email, `✅ Certificate Verified - ${appId}`, userHtml);

    return res.send(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Certificate Verified</title>
        <style>
          body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
          .success { color: #16a34a; font-size: 24px; }
          .info { background: #f0fdf4; padding: 20px; border-radius: 10px; margin: 20px auto; max-width: 500px; }
        </style>
      </head>
      <body>
        <div class="success">✅ Application Verified Successfully!</div>
        <div class="info">
          <p><strong>Application ID:</strong> ${appId}</p>
          <p><strong>Applicant:</strong> ${app.fullName}</p>
          <p><strong>Certificate Type:</strong> ${app.certificateType === 'CERTIFICATE_OF_COMPLETION' ? 'Certificate of Completion' : 'Experience Letter'}</p>
          <p>Certificate has been generated and email sent to ${app.email}</p>
          <p><a href="/verify">Go to Verification Page</a></p>
        </div>
      </body>
      </html>
    `);
  } catch (err) {
    console.error("adminVerify error:", err);
    return res.status(500).send(`
      <div style="text-align: center; padding: 50px;">
        <h2 style="color: #dc2626;">Server Error</h2>
        <p>Please try again later.</p>
      </div>
    `);
  }
};

// Verify by ID
exports.verifyById = async (req, res) => {
  try {
    const { appId } = req.params;
    const app = await Application.findOne({ appId });
    
    if (!app) {
      return res.status(404).json({ 
        success: false, 
        message: "Invalid Application ID" 
      });
    }

    return res.json({ 
      success: true, 
      status: app.status,
      applicationId: app.appId,
      name: app.fullName,
      fatherName: app.fatherName,
      dob: app.dob,
      course: app.course,
      certificateType: app.certificateType,
      duration: app.duration,
      durationUnit: app.durationUnit,
      startDate: app.startDate,
      endDate: app.endDate,
      projectName: app.projectName,
      email: app.email
    });
  } catch (err) {
    console.error("verifyById error:", err);
    return res.status(500).json({ 
      success: false, 
      error: "Server error" 
    });
  }
};

// Download Certificate
exports.downloadCertificate = async (req, res) => {
  try {
    const { appId } = req.params;
    const app = await Application.findOne({ appId });
    
    if (!app) {
      return res.status(404).send("Certificate not found");
    }
    
    if (app.status !== "VERIFIED") {
      return res.status(403).send(`
        <div style="text-align: center; padding: 50px;">
          <h2>Certificate Not Verified Yet</h2>
          <p>Your certificate is still under verification process.</p>
          <p>Status: ${app.status}</p>
          <a href="/verify">Check Status</a>
        </div>
      `);
    }

    const filePath = path.join(__dirname, `../certificates/${appId}.pdf`);
    
    if (!fs.existsSync(filePath)) {
      // Generate based on certificate type
      if (app.certificateType === 'CERTIFICATE_OF_COMPLETION') {
        await generateCompletionCertificatePDF(app, filePath);
      } else if (app.certificateType === 'EXPERIENCE_LETTER') {
        await generateExperienceLetterPDF(app, filePath);
      } else {
        await generateCompletionCertificatePDF(app, filePath);
      }
    }

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="RID_${app.certificateType === 'CERTIFICATE_OF_COMPLETION' ? 'Certificate' : 'ExperienceLetter'}_${appId}.pdf"`);
    
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
  } catch (err) {
    console.error("downloadCertificate error:", err);
    res.status(500).send("Error downloading certificate");
  }
};

// Generate Completion Certificate PDF - Single page with border
async function generateCompletionCertificatePDF(app, filePath) {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({ 
        size: "A4", 
        margin: 40
      });
      
      const stream = fs.createWriteStream(filePath);
      doc.pipe(stream);

      // ================= COLORS =================
      const primaryColor = '#000000';
      const secondaryColor = '#666666';
      const accentColor = '#2c3e50';
      const certificateColor = '#166534';

      // ================= BORDERS =================
      doc.lineWidth(2);
      doc.strokeColor('#16a34a');
      doc.rect(30, 30, doc.page.width - 60, doc.page.height - 60).stroke();

      doc.lineWidth(1);
      doc.strokeColor('#cccccc');
      doc.rect(35, 35, doc.page.width - 70, doc.page.height - 70).stroke();

      // ================= DURATION =================
      const durationValue = app.duration || "0";
      const durationUnit = app.durationUnit || "weeks";
      const startDate = formatDate(app.startDate);
      const endDate = formatDate(app.endDate);

      // ================= HEADER =================
      doc.fillColor(secondaryColor).fontSize(10)
        .text('Registration Number: 048884', 50, 60);

      doc.text('Website: www.ridbharat.com', 0, 60, { align: 'right' });

      doc.fillColor(accentColor).fontSize(22).font('Helvetica-Bold')
        .text('Research, Innovation & Discovery Bharat', 0, 90, { align: 'center' });

      doc.fontSize(14).font('Helvetica')
        .text('RID Organization, Provides Solutions for Every Problem', 0, 115, { align: 'center' });

      doc.fillColor(secondaryColor).fontSize(10)
        .text('Managed & Run by TWKSAA Welfare Foundation, Certified by Central Government', 0, 140, { align: 'center' });

      doc.text('An ISO 9001:2015 Certified Organization', 0, 155, { align: 'center' });

      doc.strokeColor('#cccccc').lineWidth(1)
        .moveTo(50, 170)
        .lineTo(doc.page.width - 50, 170)
        .stroke();

      const issueDate = formatDate(new Date());
      doc.fillColor(primaryColor).fontSize(11)
        .text(`Issue Date: ${issueDate}`, 50, 190);

      doc.text(`Certificate Number: ${app.appId}`, 0, 190, { align: 'right' });

      doc.fillColor(certificateColor).fontSize(11).font('Helvetica-Bold')
        .text(`Duration: ${durationValue} ${durationUnit} (${startDate} to ${endDate})`, 0, 210, { align: 'center' });

      // ================= TITLE =================
      doc.fontSize(28).font('Helvetica-Bold')
        .text('CERTIFICATE OF COMPLETION', 0, 240, { align: 'center' });

      // ================= BODY =================
      doc.fillColor(primaryColor).fontSize(14)
        .text('This is to certify that', 0, 290, { align: 'center' });

      doc.fillColor(certificateColor).fontSize(24).font('Helvetica-Bold')
        .text(app.fullName.toUpperCase(), 0, 320, { align: 'center' });

      doc.fillColor(primaryColor).fontSize(14)
        .text(`Son/Daughter of ${app.fatherName}`, 0, 350, { align: 'center' });

      doc.text(`has successfully completed the ${app.course} course`, 0, 390, { align: 'center' });
      doc.text(`with project "${app.projectName}"`, 0, 410, { align: 'center' });

      doc.text(
        `Duration: ${durationValue} ${durationUnit} (${startDate} to ${endDate})`,
        0,
        440,
        { align: 'center' }
      );

      doc.fontSize(12)
        .text(
          'has demonstrated dedication, hard work and excellence throughout the course.',
          50,
          480,
          { width: doc.page.width - 100 }
        );

      doc.text(
        'This certificate is awarded in recognition of successful completion of the training program.',
        50,
        500,
        { width: doc.page.width - 100 }
        );

      // ================= SIGNATURE SECTION =================
      const signatureY = 560;

      const randomNames = [
        "Er. Rajesh Prasad",
        "Er. Deepak Kumar"
      ];
      const randomName = randomNames[Math.floor(Math.random() * randomNames.length)];

      // ✅ SIGNATURE IMAGE
      if (fs.existsSync(signatureImagePath)) {
        doc.image(signatureImagePath, 100, signatureY - 45, {
          width: 120
        });
      }

      doc.fillColor(primaryColor).fontSize(12)
        .text('Authorized Signatory', 100, signatureY + 20);

      doc.fontSize(14).font('Helvetica-Bold')
        .text(randomName, 100, signatureY + 40);

      doc.fontSize(12).font('Helvetica')
        .text('CEO & Director', 100, signatureY + 60);

      doc.text('RID Bharat, Bhopal', 100, signatureY + 75);

      // Signature line
      doc.strokeColor('#000').lineWidth(1)
        .moveTo(100, signatureY + 30)
        .lineTo(300, signatureY + 30)
        .stroke();

      // ✅ STAMP IMAGE
      if (fs.existsSync(stampImagePath)) {
        doc.image(
          stampImagePath,
          doc.page.width - 190,
          signatureY - 25,
          { width: 100 }
        );
      }

      doc.fillColor(secondaryColor).fontSize(10)
        .text('Official Stamp & Seal', doc.page.width - 200, signatureY + 80, {
          width: 150,
          align: 'center'
        });

      // ================= FOOTER =================
      doc.strokeColor('#cccccc').lineWidth(0.5)
        .moveTo(50, doc.page.height - 80)
        .lineTo(doc.page.width - 50, doc.page.height - 80)
        .stroke();

      doc.fillColor(accentColor).fontSize(10).font('Helvetica-Bold')
        .text('Digitally Signed & Verified', 0, doc.page.height - 70, { align: 'center' });

      doc.text(
        'Research, Innovation & Discovery Bharat (RID Bharat)',
        0,
        doc.page.height - 55,
        { align: 'center' }
      );

      doc.fillColor(certificateColor).fontSize(9)
        .text(
          `Verify this certificate at: rid-bharat.org/verify | Certificate ID: ${app.appId}`,
          0,
          doc.page.height - 40,
          { align: 'center' }
        );

      doc.fillColor(secondaryColor).fontSize(8)
        .text(
          'Office Address: MiG–72, Sector A, Rajeev Nagar, Ayodhya Nagar, Bhopal, Madhya Pradesh 462021 (India)',
          0,
          doc.page.height - 25,
          { align: 'center' }
        );

      doc.text(
        'Contact: +91 98927 82728 | Email: supportid@gamil.com',
        0,
        doc.page.height - 15,
        { align: 'center' }
      );

      doc.end();

      stream.on("finish", () => resolve(true));
      stream.on("error", reject);
    } catch (err) {
      reject(err);
    }
  });
}


// Generate Experience Letter PDF - User entered duration as is
async function generateExperienceLetterPDF(app, filePath) {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({
        size: "A4",
        margin: 40
      });

      const stream = fs.createWriteStream(filePath);
      doc.pipe(stream);

      // ================= COLORS =================
      const primaryColor = '#000000';
      const secondaryColor = '#666666';
      const accentColor = '#2c3e50';

      // ================= BORDERS =================
      doc.lineWidth(2);
      doc.strokeColor('#16a34a');
      doc.rect(30, 30, doc.page.width - 60, doc.page.height - 60).stroke();

      doc.lineWidth(1);
      doc.strokeColor('#cccccc');
      doc.rect(35, 35, doc.page.width - 70, doc.page.height - 70).stroke();

      // ================= DURATION =================
      const durationValue = app.duration || "0";
      const durationUnit = app.durationUnit || "months";
      const startDate = formatDate(app.startDate);
      const endDate = formatDate(app.endDate);

      // ================= HEADER =================
      doc.fillColor(secondaryColor).fontSize(10)
        .text('Registration Number: 048884', 50, 60);

      doc.text('Website: www.ridbharat.com', 0, 60, { align: 'right' });

      doc.fillColor(accentColor).fontSize(22).font('Helvetica-Bold')
        .text('Research, Innovation & Discovery Bharat', 0, 90, { align: 'center' });

      doc.fontSize(14).font('Helvetica')
        .text('RID Organization, Provides Solutions for Every Problem', 0, 115, { align: 'center' });

      doc.fillColor(secondaryColor).fontSize(10)
        .text('Managed & Run by TWKSAA Welfare Foundation, Certified by Central Government', 0, 140, { align: 'center' });

      doc.text('An ISO 9001:2015 Certified Organization', 0, 155, { align: 'center' });

      doc.strokeColor('#cccccc').lineWidth(1)
        .moveTo(50, 170)
        .lineTo(doc.page.width - 50, 170)
        .stroke();

      const issueDate = formatDate(new Date());
      doc.fillColor(primaryColor).fontSize(11)
        .text(`Issue Date: ${issueDate}`, 50, 190);

      doc.text(`IEL Number: ${app.appId}`, 0, 190, { align: 'right' });

      doc.fillColor(accentColor).fontSize(11).font('Helvetica-Bold')
        .text(`Duration: ${durationValue} ${durationUnit} (${startDate} to ${endDate})`, 0, 210, { align: 'center' });

      // ================= TITLE =================
      doc.fillColor(accentColor).fontSize(28).font('Helvetica-Bold')
        .text('Internship Experience Letter', 0, 240, { align: 'center' });

      // ================= BODY =================
      doc.fillColor(primaryColor).fontSize(12)
        .text('To,', 50, 300);

      doc.text(`${app.fullName},`, 80, 320);
      doc.text(`S/O ${app.fatherName},`, 80, 340);
      doc.text('Bhopal, Madhya Pradesh', 80, 360);

      doc.fillColor(accentColor).fontSize(12).font('Helvetica-Bold')
        .text('Subject: Experience Letter of Internship Completion at RID Bharat.', 50, 400);

      doc.fillColor(primaryColor).fontSize(12)
        .text(
          `This is to certify that ${app.fullName} has completed his/her ${durationValue} ${durationUnit} internship with us, from ${startDate} to ${endDate}.`,
          50,
          440,
          { width: doc.page.width - 100 }
        );

      doc.text(
        `As part of his/her internship, he/she has worked on "${app.projectName}" in RID Bharat Project.`,
        50,
        480,
        { width: doc.page.width - 100 }
      );

      doc.text(
        `During the tenure with us, we found ${app.fullName}, sincere and result oriented.`,
        50,
        520,
        { width: doc.page.width - 100 }
      );

      doc.text(
        `We wish ${app.fullName}, all the best for his/her future endeavors.`,
        50,
        560,
        { width: doc.page.width - 100 }
      );

      // ================= SIGNATURE SECTION =================
      const signatureY = 630;

      const randomNames = [
        "Er. Rajesh Prasad",
        "Er. Deepak Kumar"
      ];
      const randomName = randomNames[Math.floor(Math.random() * randomNames.length)];

      doc.fillColor(primaryColor).fontSize(12)
        .text('Best Regards,', 50, signatureY);

      // ✅ SIGNATURE IMAGE
      if (fs.existsSync(signatureImagePath)) {
        doc.image(signatureImagePath, 50, signatureY + 15, {
          width: 120
        });
      }

      doc.fontSize(14).font('Helvetica-Bold')
        .text(randomName, 50, signatureY + 45);

      doc.fontSize(12).font('Helvetica')
        .text('CEO & Director', 50, signatureY + 65);

      doc.text('(RID Bharat Bhopal)', 50, signatureY + 80);

      // Signature line
      doc.strokeColor('#000000').lineWidth(1)
        .moveTo(50, signatureY + 35)
        .lineTo(250, signatureY + 35)
        .stroke();

      // ✅ STAMP IMAGE (RIGHT SIDE)
      if (fs.existsSync(stampImagePath)) {
        doc.image(
          stampImagePath,
          doc.page.width - 190,
          signatureY + 20,
          { width: 100 }
        );
      }

      doc.fillColor(secondaryColor).fontSize(10)
        .text(
          'Authorized Stamp & Signature',
          doc.page.width - 200,
          signatureY + 130,
          { width: 150, align: 'center' }
        );

      // ================= FOOTER =================
      doc.strokeColor('#cccccc').lineWidth(0.5)
        .moveTo(50, doc.page.height - 80)
        .lineTo(doc.page.width - 50, doc.page.height - 80)
        .stroke();

      doc.fillColor(accentColor).fontSize(10).font('Helvetica-Bold')
        .text('Digitally Signed & Approved', 0, doc.page.height - 70, { align: 'center' });

      doc.text(
        'Research, Innovation & Discovery Bharat (RID Bharat)',
        0,
        doc.page.height - 55,
        { align: 'center' }
      );

      doc.fillColor(secondaryColor).fontSize(9)
        .text(
          'Office Address: MiG–72, Sector A, Rajeev Nagar, Ayodhya Nagar, Bhopal, Madhya Pradesh 462021 (India)',
          0,
          doc.page.height - 30,
          { align: 'center' }
        );

      doc.text(
        'Contact: +91 98927 82728 | Email: supportid@gamil.com',
        0,
        doc.page.height - 15,
        { align: 'center' }
      );

      doc.end();

      stream.on("finish", () => resolve(true));
      stream.on("error", reject);
    } catch (err) {
      reject(err);
    }
  });
}
