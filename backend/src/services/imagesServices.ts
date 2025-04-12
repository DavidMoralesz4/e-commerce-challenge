import { ImageModel, ProductModel } from "../config/data-source";
import { Image } from "../entities/Images";

export const createImagesService = async (urls: string[], productId: number): Promise<Image[]> => {
    try {
      // Verificar si el producto existe
      const product = await ProductModel.findOneBy({ id: productId });
      if (!product) {
        throw new Error("Producto no encontrado");
      }
  
      // Crear las entidades de imagen
      const images = urls.map(url => ImageModel.create({ url, product }));
  
      // Guardar todas las imágenes
      return await ImageModel.save(images);
    } catch (error: any) {
      throw new Error(`Error al crear las imágenes: ${error.message}`);
    }
  };