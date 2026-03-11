import pool from "../db/pool.js";
import type { Task } from "../types/task.js";

async function createTaskModel(title: string, description: string, userId: number): Promise<Task | undefined> {
  const result = await pool.query(`INSERT INTO tasks (title, description, user_id) VALUES ($1, $2, $3) RETURNING *`, [
    title,
    description,
    userId,
  ]);
  return result.rows[0];
}

export default { createTaskModel };
