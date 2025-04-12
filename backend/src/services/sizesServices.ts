import { SizeModel } from "../config/data-source";
import { Size } from "../entities/Size";
// import { In } from "typeorm";s

export const createSizeService = async (name: string): Promise<Size> => {
  try {
    // Normalizar el nombre (trim + uppercase para tallas)
    const normalizedName = name.trim().toUpperCase();
    
    // Verificar si la talla ya existe
    const existingSize = await SizeModel.findOneBy({ name: normalizedName });
    if (existingSize) {
      throw new Error("La talla ya existe");
    }

    // Crear y guardar la nueva talla
    const newSize = SizeModel.create({ name: normalizedName });
    await SizeModel.save(newSize);
    
    return newSize;
  } catch (error: any) {
    throw new Error(`Error al crear la talla: ${error.message}`);
  }
};


export const getAllSizesService = async (): Promise<Size[]> => {
    return await SizeModel.find();
  };