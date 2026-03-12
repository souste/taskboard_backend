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

async function getTasksByUserModel(userId: number): Promise<Task[] | undefined> {
  const result = await pool.query(`SELECT * FROM tasks WHERE user_id = $1`, [userId]);
  return result.rows;
}

async function getTaskByUserModel(userId: number, taskId: number): Promise<Task | undefined> {
  const result = await pool.query(`SELECT * FROM tasks WHERE user_id = $1 AND id = $2`, [userId, taskId]);
  return result.rows[0];
}

async function updateTaskByUserModel(
  title: string,
  description: string,
  userId: number,
  taskId: number,
): Promise<Task | undefined> {
  const result = await pool.query(
    `UPDATE tasks SET title = $1, description = $2 WHERE user_id = $3 AND id = $4 RETURNING *`,
    [title, description, userId, taskId],
  );
  return result.rows[0];
}

async function deleteTaskByUserModel(userId: number, taskId: number): Promise<Task | undefined> {
  const result = await pool.query(`DELETE FROM tasks WHERE user_id = $1 AND id = $2 RETURNING *`, [userId, taskId]);
  return result.rows[0];
}

export default {
  createTaskModel,
  getTasksByUserModel,
  getTaskByUserModel,
  updateTaskByUserModel,
  deleteTaskByUserModel,
};
