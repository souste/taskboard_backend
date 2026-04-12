import { Router } from "express";
const router = Router();

import { authMiddleware } from "../middleware/authMiddleware.js";

import { createCommentByTaskController } from "../controllers/commentsController.js";

router.post("/:taskId/comments", authMiddleware, createCommentByTaskController);

export default router;
