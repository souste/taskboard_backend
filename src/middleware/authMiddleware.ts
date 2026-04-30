import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

interface JwtUserPayload {
  id: number;
  email: string;
  username: string;
}

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const header = req.headers.authorization;

    if (!header) {
      return res.status(401).json({
        success: false,
        message: "No token provided!",
      });
    }

    const token = header.split(" ")[1];

    const secret = process.env.JWT_SECRET;
    if (!secret) throw new Error("JWT_SECRET missing");

    const decoded = jwt.verify(token, secret) as unknown as JwtUserPayload;

    req.user = {
      id: decoded.id,
      email: decoded.email,
      username: decoded.username,
    };

    return next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};
