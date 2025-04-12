import { Request, Response } from "express";
import { createSizeService, getAllSizesService } from "../services/sizesServices";

export const createSizeController = async (req: Request, res: Response) => {
    try {
      const { name } = req.body;
      
      if (!name || typeof name !== "string") {
         res.status(400).json({
          success: false,
          message: "El nombre de la talla es requerido y debe ser una cadena de texto"
        });
      }
  
      const newSize = await createSizeService(name);
      
       res.status(201).json({
        success: true,
        message: "Talla creada exitosamente",
        data: {
          id: newSize.id,
          name: newSize.name
        }
      });
    } catch (error: any) {
      if (error.message.includes("ya existe")) {
         res.status(409).json({
          success: false,
          message: error.message
        });
      }
      
       res.status(500).json({
        success: false,
        message: error.message || "Error interno al crear la talla"
      });
    }
  };


  export const getAllSizesController = async (req: Request, res: Response) => {
    try {
      const sizes = await getAllSizesService();
      res.json({
        success: true,
        data: sizes
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error.message || "Error al obtener las tallas"
      });
    }
  };