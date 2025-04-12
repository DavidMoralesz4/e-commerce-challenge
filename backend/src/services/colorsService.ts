import { ColorModel } from "../config/data-source";
import { Color } from "../entities/Color";

export const createColorIfNotExists = async (name: any): Promise<Color> => {
    const normalizedName = name.trim().toLowerCase();
    let color = await ColorModel.findOneBy({ name: normalizedName });
    
    if (!color) {
      color = ColorModel.create({ name: normalizedName });
      await ColorModel.save(color);
    }

    if (color) {
        throw new Error("El color ya existe");
      }
  
    return color;
  };
  
  export const getAllColors = async (): Promise<Color[]> => {
    return await ColorModel.find();
  };