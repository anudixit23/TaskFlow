# TaskFlow 
 **Status:** Under Active Development

A scalable RESTful backend for a collaborative project management platform built with **Node.js**, **Express.js**, and **MongoDB**. The API supports secure authentication, role-based access control, project and task management, file attachments, and hierarchical subtasks, following a modular MVC architecture.

## Features

* JWT Authentication with Access & Refresh Tokens
* Email Verification and Password Reset
* Role-Based Access Control (Admin, Project Admin, Member)
* Project CRUD Operations
* Team Member Management
* Task and Subtask Management
* Project Notes
* File Uploads using Multer
* Input Validation and Centralized Error Handling
* Health Check Endpoint

## Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### Authentication & Security

* JWT
* Refresh Tokens
* bcrypt
* Nodemailer

### File Handling

* Multer

### Development Tools

* Postman
* Git
* GitHub

## Architecture

The project follows the MVC (Model-View-Controller) architecture for clean separation of concerns.

```
Client
   │
   ▼
Routes
   │
   ▼
Controllers
   │
   ▼
Services / Business Logic
   │
   ▼
Models (Mongoose)
   │
   ▼
MongoDB
```

## API Modules

### Authentication

* User Registration
* Login & Logout
* Refresh Token
* Email Verification
* Forgot / Reset Password
* Change Password
* Current User

### Projects

* Create, Update, Delete Projects
* View Project Details
* Manage Project Members
* Role Management

### Tasks

* Create and Assign Tasks
* Task Status Tracking
* File Attachments
* CRUD Operations

### Subtasks

* Create and Manage Subtasks
* Completion Tracking

### Notes

* Project Notes CRUD

## Permission System

| Feature               | Admin | Project Admin | Member |
| --------------------- | :---: | :-----------: | :----: |
| Manage Projects       |  Yes  |       No      |   No   |
| Manage Members        |  Yes  |       No      |   No   |
| Manage Tasks          |  Yes  |      Yes      |   No   |
| View Tasks            |  Yes  |      Yes      |   Yes  |
| Update Subtask Status |  Yes  |      Yes      |   Yes  |
| Manage Notes          |  Yes  |       No      |   No   |

## Security

* JWT-based Authentication
* Refresh Token Mechanism
* Role-Based Authorization Middleware
* Password Hashing
* Email Verification
* Password Reset via Email
* Request Validation
* Secure File Upload Handling
* CORS Configuration

## Project Structure

```
src/
├── controllers/
├── models/
├── routes/
├── middlewares/
├── services/
├── utils/
├── validators/
├── constants/
└── app.js
```

## Getting Started

### Clone the repository

```bash
git clone https://github.com/anudixit23/TaskFlow
cd Taskflow
```

### Install dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file in the root directory and add:

```env
PORT=

MONGODB_URI=

ACCESS_TOKEN_SECRET=
ACCESS_TOKEN_EXPIRY=

REFRESH_TOKEN_SECRET=
REFRESH_TOKEN_EXPIRY=

EMAIL_HOST=
EMAIL_PORT=
EMAIL_USER=
EMAIL_PASS=

CLIENT_URL=
```

### Run the project

Development

```bash
npm run dev
```

Production

```bash
npm start
```

## Future Improvements

* Real-time collaboration using WebSockets
* Notifications
* Activity Logs
* Search & Filtering
* Pagination
* Docker Support
* API Documentation with Swagger
* Unit & Integration Tests

## License

This project is intended for educational and portfolio purposes.
