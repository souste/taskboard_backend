import pool from "../db/pool.js";
import type { Task } from "../types/task.js";

async function createTaskModel(
  title: string,
  description: string,
  position: number,
  userId: number,
  columnId: number,
): Promise<Task | undefined> {
  const result = await pool.query(
    `INSERT INTO tasks (title, description, position, user_id, column_id) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
    [title, description, position, userId, columnId],
  );
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
  position: number,
  columnId: number,
  userId: number,
  taskId: number,
): Promise<Task | undefined> {
  const result = await pool.query(
    `UPDATE tasks SET title = $1, description = $2, position = $3, column_id = $4 WHERE user_id = $5 AND id = $6 RETURNING *`,
    [title, description, position, columnId, userId, taskId],
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
