# Landing Page with Contact Form

A modern landing page with a contact form that sends emails using PHPMailer with Gmail SMTP.

## Features

- React frontend with styled-components and Framer Motion animations
- PHP backend with PHPMailer integration for email sending
- Dockerized application for easy deployment
- Responsive design

## Prerequisites

- Docker and Docker Compose
- Gmail account

## Setup

1. Clone this repository
2. Set up Gmail App Password:
   - Go to your Google Account settings
   - Navigate to Security > 2-Step Verification
   - Scroll down to "App passwords"
   - Create a new app password for "Mail" and "Other (Custom name)"
   - Copy the generated 16-character password
3. Copy the `.env.example` file to `.env` and add your Gmail credentials:
   ```
   GMAIL_EMAIL=your_gmail_address@gmail.com
   GMAIL_APP_PASSWORD=your_gmail_app_password
   ```

## Running the Application

1. Build and start the containers:
   ```
   docker-compose up -d
   ```

2. Access the application:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:3001

## Development

- Frontend code is in `src/frontend`
- Backend code is in `src/backend`

## Deployment

For production deployment:

1. Update the frontend API URL in `src/frontend/src/services/api.js`
2. Make sure your Gmail account has 2-Step Verification enabled
3. Consider using a dedicated email service for higher volume

## License

MIT 