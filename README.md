# Modern Landing Page

A beautiful, Apple-style landing page with PHP backend and React frontend, containerized with Docker.

## Features

- Modern, responsive design
- Smooth animations and transitions
- PHP backend API
- Docker containerization
- Apple-style UI/UX

## Prerequisites

- Docker
- Docker Compose

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd landing-page-1
```

2. Start the containers:
```bash
docker-compose up --build
```

3. Access the application:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000

## Project Structure

```
.
├── src/
│   ├── frontend/          # React frontend
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   └── App.js
│   │   └── package.json
│   └── backend/           # PHP backend
│       └── index.php
├── docker-compose.yml
└── README.md
```

## Development

- Frontend runs on port 3000
- Backend API runs on port 8000
- Hot reloading is enabled for both frontend and backend

## Technologies Used

- Frontend:
  - React
  - Framer Motion
  - Styled Components
  - Material-UI
- Backend:
  - PHP
- DevOps:
  - Docker
  - Docker Compose 