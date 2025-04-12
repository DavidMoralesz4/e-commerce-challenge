import { Request, Response } from "express";
import {
  createCategoryIfNotExists,
  getAllCategories,
  getCategoryById,
} from "../services/categoriesServices";

export const getAllCategoriesController = async (_: Request, res: Response) => {
  try {
    const allCategories = await getAllCategories();

    res.status(200).json(allCategories);
  } catch (error: unknown) {
    // Manejo de errores
    if (error instanceof Error) {
      res.status(500).json({
        success: false,
        message: error.message || "Error al mostrar todas las categoria",
      });
    }
  }
};

export const getCategoryByIdController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  try {
    if (!id) {
      res.status(400).json({ message: "Debes ingrar un valor" });
      return;
    }
    const categories = await getCategoryById(Number(id));
    res.status(200).json(categories);
  } catch (error: unknown) {
    if (error instanceof Error)
      res.status(500).json({
        success: false,
        message: error.message || "Error al mostrar la categoria",
      });
  }
};

export const createCategoryController = async (req: Request, res: Response) => {
  const { name } = req.body;
  try {
    if (!name) {
      res.status(400).json({ message: "Faltan campos obligatorios" });
    }

    const newCategory = await createCategoryIfNotExists(name);

    res
      .status(400)
      .json({ message: `La categoria ${newCategory} ha sido creada con exito` });
  } catch (error: unknown) {
    if (error instanceof Error)
      res.status(500).json({
        success: false,
        message: error.message || "Error al crear la categoria",
      });
  }
};
