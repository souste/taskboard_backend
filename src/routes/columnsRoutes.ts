import { Router } from "express";
const router = Router();

import { authMiddleware } from "../middleware/authMiddleware.js";

import { getColumnsByUserController, createColumnsController } from "../controllers/columnsController.js";

router.get("/", authMiddleware, getColumnsByUserController);
router.post("/", authMiddleware, createColumnsController);

export default router;
