import { ProductModel } from "../config/data-source"

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


export const createProductService = async() => {
    try {
        const products = ProductModel.create({
            
        });
        return products
    } catch (error: unknown) {
        if(error instanceof Error) {
            throw new Error(error.message);
        }
    }
}