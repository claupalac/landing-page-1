const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://*.vercel.app', process.env.VERCEL_URL, 'https://webmakersbo.site'] 
    : ['http://localhost:3000', 'http://localhost:3001'],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));
app.use(express.json());

// Log all requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// API Routes
app.get('/api/features', (req, res) => {
  console.log('Features API called');
  const features = [
    {
      id: 1,
      title: 'Feature 1',
      description: 'Discover the power of innovation'
    },
    {
      id: 2,
      title: 'Feature 2',
      description: 'Experience seamless integration'
    },
    {
      id: 3,
      title: 'Feature 3',
      description: 'Unleash your creativity'
    }
  ];

  res.json({
    status: 'success',
    data: {
      features
    }
  });
});

app.post('/api/contact', async (req, res) => {
  console.log('Contact API called with data:', req.body);
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
    
    // Check for specific Gmail authentication errors
    if (error.message && error.message.includes('Invalid login')) {
      return res.status(500).json({
        status: 'error',
        message: 'Email service authentication failed. Please contact the administrator.'
      });
    }
    
    res.status(500).json({
      status: 'error',
      message: 'Failed to process request: ' + (error.message || 'Unknown error')
    });
  }
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Only start the server if we're not in a Vercel environment
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app; 