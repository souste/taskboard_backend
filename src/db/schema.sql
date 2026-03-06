CREATE TABLE users (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR (255) NOT NULL UNIQUE,
    email VARCHAR (255) NOT NULL UNIQUE,
    password VARCHAR (255) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE boards (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE columns (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    board_id INTEGER NOT NULL REFERENCES boards(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    position INTEGER NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tasks (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    column_id INTEGER NOT NULL REFERENCES columns(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT,
    position INTEGER NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

--  COMMENTS - CREATE AFTER MVP COMPLETE


-- MVP
-- Authentication
-- - login
-- - signup
-- - full auth + protected routes
-- Core Board Structure
-- - one board (auto-generated for each user)
-- - full column functionalty (to-do, doing, done)
-- Core Task Functionality
-- - create tasks
-- - edit tasks
-- - delete tasks
-- - move taskes between columns (via dropdowns/buttons)
-- - persist everything in the db
-- Basic UI
-- - basic tailwind styling

-- Not MVP
-- - Drag and drop (columns and tasks)
-- - Multiple boards
-- - Comments
-- - Theme settings