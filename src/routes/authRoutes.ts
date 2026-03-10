import { Router } from "express";
const router = Router();

import { authMiddleware } from "../middleware/authMiddleware.js";

import { signUp, login } from "../controllers/authController.js";

router.post("/signup", signUp);
router.post("/login", login);

router.get("/me", authMiddleware, (req, res) => {
  res.json({
    success: true,
    data: { user: req.user },
  });
});

export default router;
