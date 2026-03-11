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

export default { createColumnModel, getColumnsByUserModel };
