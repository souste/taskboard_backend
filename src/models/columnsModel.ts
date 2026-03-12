import pool from "../db/pool.js";
import type { Column } from "../types/column.js";

async function createColumnModel(name: string, userId: number, position: number): Promise<Column | undefined> {
  const result = await pool.query(`INSERT INTO columns (name, user_id, position) VALUES ($1, $2, $3) RETURNING *`, [
    name,
    userId,
    position,
  ]);
  return result.rows[0];
}

async function getColumnsByUserModel(userId: number): Promise<Column[] | undefined> {
  const result = await pool.query("SELECT * FROM columns WHERE user_id = $1", [userId]);
  return result.rows;
}

async function updateColumnByUserModel(
  name: string,
  position: number,
  userId: number,
  columnId: number,
): Promise<Column | undefined> {
  const result = await pool.query(
    `UPDATE columns SET name = $1, position = $2 WHERE user_id = $3 AND id = $4 RETURNING *`,
    [name, position, userId, columnId],
  );
  return result.rows[0];
}

async function deleteColumnByUserModel(userId: number, columnId: number): Promise<Column | undefined> {
  const result = await pool.query(`DELETE FROM columns WHERE user_id = $1 AND id = $2 RETURNING *`, [userId, columnId]);

  return result.rows[0];
}

export default { createColumnModel, getColumnsByUserModel, updateColumnByUserModel, deleteColumnByUserModel };
