const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const GetMyCode = require('../models/GetMyCode');
const validator = require('validator');

// POST /api/get-my-code
router.post('/', async (req, res) => {
  try {
    const { name, email, telephone, businessType, services } = req.body;
    if (!Array.isArray(services)) {
      return res.status(400).json({ error: 'Services must be an array.' });
    }
    // Enhanced validation
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required.' });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ error: 'Invalid email format.' });
    }

    // 1. Save to MongoDB
    const newRequest = new GetMyCode({ 
      name, 
      email, 
      telephone, 
      businessType, 
      services 
    });
    await newRequest.save();

    // 2. Send email to FHAAccountants
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      tls: {
        rejectUnauthorized: false // Only for testing, remove in production
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'fhaatants@gmail.com',
      subject: 'New Quote Request from FHA Website',
      html: `
        <h2 style="color: #005f5f;">New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Phone:</strong> ${telephone || 'Not provided'}</p>
        <p><strong>Business Type:</strong> ${businessType}</p>
        <p><strong>Services Requested:</strong></p>
        <ul>
          ${services.map(service => `<li>${service}</li>`).join('')}
        </ul>
        <p><em>Received at: ${new Date().toLocaleString()}</em></p>
        <p style="color: #005f5f; font-weight: bold;">FHA Accountants - Precision-driven accounting and advisory services</p>
      `
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Quote request submitted successfully!' });

  } catch (error) {
    console.error('Error processing quote request:', {
      error: error.message,
      stack: error.stack,
      requestBody: req.body
    });
    res.status(500).json({ 
      error: 'An error occurred while processing your request.',
      details: process.env.NODE_ENV === 'development' ? error.message : null
    });
  }
});

module.exports = router;
