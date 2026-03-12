import { Request, Response } from "express";
import columnsModel from "../models/columnsModel.js";
const { createColumnModel, getColumnsByUserModel } = columnsModel;

export const getColumnsByUserController = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const userId = req.user.id;
    const columns = await getColumnsByUserModel(userId);

    res.status(200).json({
      success: true,
      data: columns,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export const createColumnsController = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const userId = req.user.id;
    const { name, position } = req.body;

    if (!name || !position) {
      return res.status(400).json({
        success: false,
        message: "Columns must contain a name and position",
      });
    }

    const created = await createColumnModel(name, userId, position);

    res.status(201).json({
      success: true,
      data: created,
      message: "Column created successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
