import { Router } from "express";
const router = Router();

import { authMiddleware } from "../middleware/authMiddleware.js";

import {
  getTasksByUserController,
  getTaskByUserController,
  createTaskController,
  updateTaskByUserController,
  deleteTaskByUserController,
} from "../controllers/tasksController.js";

router.get("/", authMiddleware, getTasksByUserController);
router.get("/:id", authMiddleware, getTaskByUserController);
router.post("/", authMiddleware, createTaskController);
router.patch("/:id", authMiddleware, updateTaskByUserController);
router.delete("/:id", authMiddleware, deleteTaskByUserController);

export default router;
