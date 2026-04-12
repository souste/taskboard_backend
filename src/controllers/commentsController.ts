import { Request, Response } from "express";
import commentsModel from "../models/commentsModel.js";
const { createCommentByTaskModel, getCommentsByTaskModel, updateCommentByTaskModel, deleteCommentByTaskModel } =
  commentsModel;

export const createCommentByTaskController = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }
    const userId = req.user.id;
    const taskId = Number(req.params.taskId);
    const { content } = req.body;

    if (!content) {
      return res.status(400).json({
        success: false,
        message: "Comments cannot be empty",
      });
    }
    const created = await createCommentByTaskModel(content, userId, taskId);

    if (!created) {
      return res.status(404).json({
        success: false,
        message: `Task not found with id ${taskId} for user`,
      });
    }

    return res.status(201).json({
      success: true,
      data: created,
      message: "Comment created successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
