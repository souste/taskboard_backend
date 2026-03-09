import pool from "../db/pool.js";
import type { User } from "../types/user.js";

async function findUserByEmail(email: string): Promise<User | undefined> {
  const result = await pool.query<User>(`SELECT * FROM users WHERE email = $1`, [email]);
  return result.rows[0];
}

async function createUser(username: string, email: string, password: string): Promise<User> {
  const result = await pool.query<User>(
    `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id, username, email, created_at`,
    [username, email, password],
  );
  return result.rows[0];
}

export default { findUserByEmail, createUser };
