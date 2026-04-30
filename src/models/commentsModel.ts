import pool from "../db/pool.js";
import type { Comment } from "../types/comment.js";

async function createCommentByTaskModel(
  content: string,
  userId: number,
  taskId: number,
): Promise<Comment | undefined> {
  const result = await pool.query(
    `INSERT INTO comments (content, user_id, task_id) VALUES ($1, $2, $3) RETURNING *`,
    [content, userId, taskId],
  );
  return result.rows[0];
}

async function getCommentsByTaskModel(
  taskId: number,
): Promise<Comment[] | undefined> {
  const result = await pool.query(
    `SELECT c.*, 
     u.username 
     FROM comments c 
     Join users u ON c.user_id = u.id 
     WHERE c.task_id = $1 
     ORDER BY c.created_at ASC`,
    [taskId],
  );
  return result.rows;
}

async function updateCommentByTaskModel(
  content: string,
  userId: number,
  commentId: number,
): Promise<Comment | undefined> {
  const result = await pool.query(
    `UPDATE comments SET content = $1, updated_at = CURRENT_TIMESTAMP WHERE user_id = $2 AND id = $3 RETURNING *`,
    [content, userId, commentId],
  );
  return result.rows[0];
}

async function deleteCommentByTaskModel(
  userId: number,
  commentId: number,
): Promise<Comment | undefined> {
  const result = await pool.query(
    `DELETE FROM comments WHERE user_id = $1 AND id = $2 RETURNING *`,
    [userId, commentId],
  );
  return result.rows[0];
}

export default {
  createCommentByTaskModel,
  getCommentsByTaskModel,
  updateCommentByTaskModel,
  deleteCommentByTaskModel,
};
