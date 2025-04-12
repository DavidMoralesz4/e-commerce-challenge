import { In } from "typeorm";
import {
  AppDataSource,
  CategoryModel,
  ColorModel,
  ImageModel,
  ProductModel,
  SizeModel,
} from "../config/data-source";
import { Product } from "../entities/Product";
import { IProducts } from "../interfaces/products";

/// Servicio para mostrar el producto
export const getProductsService = async () => {
  try {
    const products = await ProductModel.find({
      relations: ["images", "sizes", "colors"],
    });
    return products;
  } catch (error) {
    throw new Error("Error al obtener los productos");
  }
};

export const createProductService = async (data: IProducts) => {
  try {
    const { name, price, stock, category, images, sizes, colors } = data;

    const categories = await CategoryModel.findOneBy({ id: category });
    if (!categories) {
      throw new Error("Categoría no encontrada");
    }

    const newProduct = new Product();
    newProduct.name = name;
    newProduct.price = price;
    newProduct.stock = stock;
    newProduct.category = categories;

    const savedProduct = await ProductModel.save(newProduct);

    if (images?.length > 0) {
      const imagesToSave = images.map((url) => {
        return ImageModel.create({
          url: url,
          product: savedProduct,
        });
      });
      await ImageModel.save(imagesToSave);
    }

    // 4. Manejar tallas (ManyToMany)
    if (sizes?.length > 0) {
      const allSizes = await SizeModel.findBy({ id: In(sizes) });
      savedProduct.sizes = allSizes;
    }

    // 5. Manejar colores (ManyToMany)
    if (colors?.length > 0) {
      const allColors = await ColorModel.findBy({ id: In(colors) });
      savedProduct.colors = allColors;
    }

    // 6. Guardar relaciones y devolver producto completo
    await ProductModel.save(savedProduct);
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export const deleteProductsService = async (id: string) => {
  try {
    const product = ProductModel.delete(id);
    return product;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export const updateProductService = async (id: string) => {
  try {
    // Actualizar un producto
  } catch (error) {}
};
