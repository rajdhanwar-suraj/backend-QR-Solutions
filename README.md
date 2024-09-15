# Training Platform - Backend

This is the backend for the Training Platform, built using **Node.js**, **Express**, and **MongoDB**. It handles user authentication, course management, student management, and schedule management.

## Features

- User registration and login (JWT-based authentication)
- CRUD operations for students, courses, and schedules
- Role-based access control (Admin and User roles)
- Token-based authentication for secure API access

## Prerequisites

Ensure you have the following installed on your machine:

- **Node.js** (v14 or later)
- **MongoDB** (local or remote instance)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/rajdhanwar-suraj/backend-QR-Solutions.git
```

## Navigate into the project directory:

```bash
cd training-platform-backend
```

## Install the required dependencies:

```bash
npm install
```

## Create a .env file in the root of the project and add the following environment variables:

```base
PORT=5000
MONGO_URI=mongodb://localhost:27017/training_platform
JWT_SECRET=your_secret_key
```

## Replace MONGO_URI with your MongoDB connection string and JWT_SECRET with your own secret key for JWT authentication.

## Start the server:

```bash
npm run start
```
The backend will be running on http://localhost:5000.