# Souste Kanban: Backend

[![Node.js](https://img.shields.io/badge/Node.js-20-green)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express-4.18-lightgrey)](https://expressjs.com)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-blue)](https://www.postgresql.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)

This repository contains the REST API for Souste Kanban, a full-stack Kanban task management application. The backend handles authentication, task and column management, relational data mapping, and communication with the PostgreSQL database.

Frontend Repository: https://github.com/souste/taskboard_frontend

## Demo Video

🎥 [Souste Kanban Full Demo](https://youtu.be/UlOvm154tCk)

## Tech Stack

- Node.js
- Express.js
- PostgreSQL
- TypeScript
- JWT Authentication
- Bcrypt
- node-postgres (pg)

## Features

- JWT-based authentication with secure password hashing
- CRUD operations for boards, columns, tasks, and comments
- Relational PostgreSQL database structure for users, columns, and tasks
- Task and column reordering logic for drag-and-drop synchronization
- Middleware-based validation and input sanitization
- Type-safe database queries using TypeScript generics
- CORS configuration for frontend/backend communication

## Getting Started

To run the backend locally, follow these steps:

### Prerequisites

- **Node.js** (v20 or higher)
- **PostgreSQL** (v16 or higher)
- **npm** (v10 or higher)

### Steps

1. Clone this [repository](https://github.com/souste/taskboard_backend)
2. Install dependencies with `npm install`
3. Create a `.env` file with the following variables:
   - `PORT=3000`
   - `DATABASE_URL=your_postgres_connection_string`
   - `JWT_SECRET=your_super_secret_key`
4. Run the database migration/setup script (if applicable)
5. Start the server: `npm run dev`
6. API will be available at **http://localhost:3000**
