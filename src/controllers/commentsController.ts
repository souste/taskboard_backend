import { Request, Response } from "express";
import commentsModel from "../models/commentsModel.js";
const { createCommentByTaskModel, getCommentsByTaskModel, updateCommentByTaskModel, deleteCommentByTaskModel } =
  commentsModel;

export const getCommentsByTaskController = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }
    const userId = req.user.id;
    const taskId = Number(req.params.taskId);

    const comments = await getCommentsByTaskModel(userId, taskId);

    return res.status(200).json({
      success: true,
      data: comments,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

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

export const updateCommentByTaskController = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }
    const userId = req.user.id;
    const commentId = Number(req.params.commentId);
    const { content } = req.body;

    if (!content) {
      return res.status(400).json({
        success: false,
        message: "Comments cannot be empty",
      });
    }

    const updated = await updateCommentByTaskModel(content, userId, commentId);

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: `Comment not found with id ${commentId} for user`,
      });
    }

    return res.status(200).json({
      success: true,
      data: updated,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export const deleteCommentByTaskController = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }
    const userId = req.user.id;
    const commentId = Number(req.params.commentId);

    const deleted = await deleteCommentByTaskModel(userId, commentId);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Comment not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: deleted,
      message: "Comment deleted successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
