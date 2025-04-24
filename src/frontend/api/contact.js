import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        status: 'error',
        message: 'Missing required fields'
      });
    }

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({
        status: 'error',
        message: 'Invalid email format'
      });
    }

    // Check if environment variables are set
    if (!process.env.GMAIL_EMAIL || !process.env.GMAIL_APP_PASSWORD) {
      console.error('Gmail credentials not configured');
      return res.status(500).json({
        status: 'error',
        message: 'Email service not configured'
      });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_APP_PASSWORD
      }
    });

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_EMAIL,
      to: process.env.GMAIL_EMAIL,
      replyTo: email,
      subject: `New Contact Form Submission: ${subject}`,
      text: `You have received a new message from your website contact form.\n\n` +
            `Name: ${name}\n` +
            `Email: ${email}\n` +
            `Subject: ${subject}\n\n` +
            `Message:\n${message}`
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({
      status: 'success',
      message: 'Your message has been received. We will get back to you soon.'
    });
  } catch (error) {
    console.error('Error in contact form:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to process request: ' + (error.message || 'Unknown error')
    });
  }
} 