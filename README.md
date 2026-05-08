# Souste Kanban: Backend

[![Node.js](https://img.shields.io/badge/Node.js-20-green)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express-4.18-lightgrey)](https://expressjs.com)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-blue)](https://www.postgresql.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)

This is the robust REST API powering Souste Kanban. It manages data persistence, relational task mapping, and secure user authentication for the task management ecosystem.

Frontend Repository available here: https://github.com/souste/taskboard_frontend

## Demo Video

To be added 🎥

## Tech Stack

- **Server:** Node.js, Express.js
- **Database:** PostgreSQL (Relational Data & Task Ordering)
- **Authentication:** JWT (JSON Web Tokens) & Bcrypt password hashing
- **Type Safety:** TypeScript with custom DB-model generics
- **Database Driver:** PG (node-postgres)

## Features

- **Relational Data Mapping:** Architected for 1-to-Many relationships (User -> Columns -> Tasks)
- **Secure Authentication:** Stateless **JWT** authentication with secure password hashing via **Bcrypt**
- **Type-Safe Queries:** Custom generic wrappers for database queries to ensure 1:1 parity with frontend types
- **Task Reordering Logic:** Handles complex position index updates for seamless drag-and-drop synchronization
- **Input Sanitization:** Middleware-based validation to ensure data integrity across all board actions
- **CORS Configuration:** Optimized for secure cross-origin communication with the React frontend

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
