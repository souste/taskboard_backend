import { Router } from "express";
const router = Router();

import { authMiddleware } from "../middleware/authMiddleware.js";

import {
  createCommentByTaskController,
  getCommentsByTaskController,
  updateCommentByTaskController,
  deleteCommentByTaskController,
} from "../controllers/commentsController.js";

router.get("/:taskId/comments", authMiddleware, getCommentsByTaskController);
router.post("/:taskId/comments", authMiddleware, createCommentByTaskController);
router.patch("/:taskId/comments/:commentId", authMiddleware, updateCommentByTaskController);
router.delete("/:taskId/comments/:commentId", authMiddleware, deleteCommentByTaskController);

export default router;
