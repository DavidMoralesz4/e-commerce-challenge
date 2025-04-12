import { Request, Response } from "express";
import { createImagesService } from "../services/imagesServices";

export const createImagesController = async (req: Request, res: Response) => {
    try {
      const { productId } = req.params;
      const { urls } = req.body;
  
      if (!urls || !Array.isArray(urls)) {
         res.status(400).json({
          success: false,
          message: "Se requiere un array de URLs en el cuerpo de la solicitud"
        });
        return
      }
  
      const images = await createImagesService(urls, Number(productId));
      
       res.status(201).json({
        success: true,
        message: "Imágenes creadas exitosamente",
        data: images
      });
    } catch (error: any) {
      if (error.message.includes("Producto no encontrado")) {
         res.status(404).json({
          success: false,
          message: error.message
        });
      }
      
       res.status(500).json({
        success: false,
        message: error.message || "Error al crear las imágenes"
      });
    }
  };