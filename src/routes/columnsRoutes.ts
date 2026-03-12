import { Router } from "express";
const router = Router();

import { authMiddleware } from "../middleware/authMiddleware.js";

import {
  getColumnsByUserController,
  createColumnsController,
  updateColumnByUserController,
  deleteColumnByUserController,
} from "../controllers/columnsController.js";

router.get("/", authMiddleware, getColumnsByUserController);
router.post("/", authMiddleware, createColumnsController);
router.patch("/:id", authMiddleware, updateColumnByUserController);
router.delete("/:id", authMiddleware, deleteColumnByUserController);

export default router;
