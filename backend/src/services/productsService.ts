import { AppDataSource, CategoryModel, ColorModel, ProductModel, SizeModel } from "../config/data-source"
import { Category } from "../entities/Category";
import { Color } from "../entities/Color";
import { Product } from "../entities/Product";
import { Size } from "../entities/Size";
import { IProducts } from "../interfaces/products";

/// Servicio para mostrar el producto
export const getProductsService = async() => {
    try {
        const products = await ProductModel.find();
        return products
    } catch (error: unknown) {
        if(error instanceof Error) {
            throw new Error(error.message);
        }
    }
}


export const createProductService = async (data: IProducts) => {
    const { name, price, stock, category, images, sizes, colors } = data;

    try {
        const foundCategory = await CategoryModel.findOneBy({ id: category });
        if (!foundCategory) {
            throw new Error(`Categoría con ID ${category} no encontrada`);
        }

        const newProduct = await AppDataSource.transaction(async (transactionalEntityManager) => {
            const product = transactionalEntityManager.create(Product, {
                name,
                price,
                stock,
                category: foundCategory,
            });

            // Asociar tallas (si existen)
            if (sizes && Array.isArray(sizes)) {
                const foundSizes = await transactionalEntityManager.find(Size, {
                    where: { id: sizes },
                });
                if (foundSizes.length !== sizes.length) {
                    throw new Error("Algunas tallas no existen");
                }
                product.sizes = foundSizes;
            }

            // Asociar colores (si existen)
            if (colors && Array.isArray(colors)) {
                const foundColors = await transactionalEntityManager.find(Color, {
                    where: { id: colors },
                });
                if (foundColors.length !== colors.length) {
                    throw new Error("Algunos colores no existen");
                }
                product.colors = foundColors;
            }

            // Guardar el producto
            return await transactionalEntityManager.save(product);
        });

        return newProduct;
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
    }
};


export const deleteProductsService = async(id: string) => {
 try {
    const product = ProductModel.delete(id)
    return product
 } catch (error: unknown) {
    if (error instanceof Error) {
        throw new Error(error.message);
    }
 }
}