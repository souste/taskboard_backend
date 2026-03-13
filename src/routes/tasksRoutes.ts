import { Router } from "express";
const router = Router();

import { authMiddleware } from "../middleware/authMiddleware.js";

import { getTasksByUserController, createTaskController } from "../controllers/tasksController.js";

router.get("/", authMiddleware, getTasksByUserController);
router.post("/", authMiddleware, createTaskController);

export default router;
