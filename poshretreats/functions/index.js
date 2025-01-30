
/* eslint-disable */

const functions = require("firebase-functions");


const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

// Initialize Firebase Admin
if (!admin.apps.length) {
  admin.initializeApp();
}

// Firestore reference
const db = admin.firestore();

// Configure SendPulse SMTP
const transporter = nodemailer.createTransport({
  host: "smtp-pulse.com", // SendPulse SMTP server
  port: 465, // Use 465 for SSL
  secure: true,
  auth: {
    user: "hello@shopmythrift.store", // SendPulse SMTP email
    pass: "Wk5gDXKBEX", // SendPulse SMTP password
  },
});

// Firestore Trigger: Send email when a new contact form is submitted
exports.sendContactEmail = functions.firestore
  .document("contactus/{docId}")
  .onCreate(async (snap, context) => {
    try {
      const contactData = snap.data();
      const { firstName, lastName, email, phoneNumber, message, createdAt } = contactData;

      console.log("New contact submission detected:", contactData);

      // Email Content
      const emailContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; background-color: #f9f9f9; color: #333; padding: 20px; }
            .container { max-width: 600px; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); }
            h2 { color: #f9531e; text-align: center; }
            .details { margin: 20px 0; padding: 15px; background: #f3f3f3; border-radius: 6px; }
            .footer { text-align: center; font-size: 12px; color: #777; margin-top: 20px; padding-top: 10px; border-top: 1px solid #ddd; }
            .footer a { color: #f9531e; text-decoration: none; }
          </style>
        </head>
        <body>
          <div class="container">
            <h2>New Contact Form Submission</h2>
            <p>You have received a new message from a user via the contact form.</p>
            <div class="details">
              <p><strong>Name:</strong> ${firstName} ${lastName}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phoneNumber}</p>
              <p><strong>Message:</strong></p>
              <p>${message}</p>
              <p><strong>Submitted At:</strong> ${new Date(createdAt).toLocaleString()}</p>
            </div>
            <p>Reply directly to this email to respond to the user.</p>
            <div class="footer">
              <p>© 2024 My Thrift Technologies Ltd. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `;

      // Send Email
      await transporter.sendMail({
        from: '"My Thrift" <hello@shopmythrift.store>',
        to: "tobiwunmie@gmail.com",
        subject: "New Contact Form Submission",
        html: emailContent,
      });

      console.log("Email sent successfully for:", firstName, lastName);

      return null;
    } catch (error) {
      console.error("Error sending contact email:", error);
      return null;
    }
  });
