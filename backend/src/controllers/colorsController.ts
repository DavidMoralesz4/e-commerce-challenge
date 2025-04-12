import { Request, Response } from "express";
import { createColorIfNotExists, getAllColors } from "../services/colorsService";


export const getColorsController = async(_: Request, res: Response) => {
    try {
        const allColors = await getAllColors();

        res.status(200).json(allColors);
    } catch (error: unknown) {
        if(error instanceof Error) {
            res.status(500).json({
                success: false,
                message: error.message || "Error al obtener los colores",
              });
        }
    }
}


export const createColorsController = async(req: Request, res: Response) => {
    try {
        const { name } = req.body;
    
        // Validación básica
        if (!name || typeof name !== "string") {
          res.status(400).json({
            success: false,
            message: "El nombre del color es requerido y debe ser una cadena de texto"
          });
          return
        }

        const color = await createColorIfNotExists(name)
         res.status(201).json({
            success: true,
            message: "Color creado exitosamente",
            data: {
              id: color.id,
              name: color.name
            }
          });
    } catch (error: unknown) {
        if(error instanceof Error) {
            res.status(500).json({
                success: false,
                message: error.message || "Error al crear el color",
              });
        }
    }
}