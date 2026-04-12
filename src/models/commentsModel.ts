import pool from "../db/pool.js";
import type { Comment } from "../types/comment.js";

async function createCommentByTaskModel(content: string, userId: number, taskId: number): Promise<Comment | undefined> {
  const result = await pool.query(`INSERT INTO comments (content, user_id, task_id) VALUES ($1, $2, $3) RETURNING *`, [
    content,
    userId,
    taskId,
  ]);
  return result.rows[0];
}

async function getCommentsByTaskModel(userId: number, taskId: number): Promise<Comment[] | undefined> {
  const result = await pool.query(
    `SELECT * FROM comments WHERE user_id = $1 AND task_id = $2 ORDER BY created_at ASC`,
    [userId, taskId],
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

async function deleteCommentByTaskModel(userId: number, commentId: number): Promise<Comment | undefined> {
  const result = await pool.query(`DELETE FROM comments WHERE user_id = $1 AND id = $2 RETURNING *`, [
    userId,
    commentId,
  ]);
  return result.rows[0];
}

export default {
  createCommentByTaskModel,
  getCommentsByTaskModel,
  updateCommentByTaskModel,
  deleteCommentByTaskModel,
};
