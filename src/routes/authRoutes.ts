import { Router } from "express";
const router = Router();

import { signUp, login } from "../controllers/authController.js";

router.post("/signup", signUp);
router.post("/login", login);

export default router;
