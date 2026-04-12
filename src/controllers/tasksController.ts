import { Request, Response } from "express";
import tasksModel from "../models/tasksModel.js";
const { createTaskModel, getTasksByUserModel, getTaskByUserModel, updateTaskByUserModel, deleteTaskByUserModel } =
  tasksModel;

export const getTasksByUserController = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }
    const userId = req.user.id;
    const tasks = await getTasksByUserModel(userId);

    return res.status(200).json({
      success: true,
      data: tasks,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export const getTaskByUserController = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }
    const userId = req.user.id;
    const taskId = Number(req.params.id);

    const task = await getTaskByUserModel(userId, taskId);

    return res.status(200).json({
      success: true,
      data: task,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export const createTaskController = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }
    const userId = req.user.id;
    const { title, description, position, column_id } = req.body;

    if (!title || !description || position === undefined || column_id === undefined) {
      return res.status(400).json({
        success: false,
        message: "Tasks must contain a title, description, position and column_id",
      });
    }

    const created = await createTaskModel(title, description, position, userId, column_id);

    return res.status(201).json({
      success: true,
      data: created,
      message: "Task created successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export const updateTaskByUserController = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const userId = req.user.id;
    const taskId = Number(req.params.id);
    const { title, description, position, column_id } = req.body;

    if (!title || !description || position === undefined || column_id === undefined) {
      return res.status(400).json({
        success: false,
        message: "Tasks must include a title, description, position, and column_id.",
      });
    }

    const updated = await updateTaskByUserModel(title, description, position, column_id, userId, taskId);

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: updated,
      message: "Task updated successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export const deleteTaskByUserController = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const userId = req.user.id;
    const taskId = Number(req.params.id);

    const deleted = await deleteTaskByUserModel(userId, taskId);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: deleted,
      message: "Task deleted successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
