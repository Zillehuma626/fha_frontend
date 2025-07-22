// routes/contact.js
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const Contact = require('../models/Contact');
require('dotenv').config();

router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // ✅ Send email using nodemailer

    const transporter = nodemailer.createTransport({
      host:'smtp.gmail.com',
      port:465,
      secure:true,
      auth: {
        user: process.env.EMAIL_USER,      // 🔒 Replace with your email
        pass: process.env.EMAIL_PASS// 🔒 Use App Password for Gmail
      }
    });

    const mailOptions = {
      from: '"FHA Contact Form" <fhaatants@gmail.com>',
      to: 'fhaatants@gmail.com', // Replace with the email where you want to receive contact form messages
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('❌ Failed to save message or send email:', error.message);
    res.status(500).json({ error: 'Failed to save message' });
  }
});

module.exports = router;







