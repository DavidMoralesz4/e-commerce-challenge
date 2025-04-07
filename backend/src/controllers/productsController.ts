import { Request, Response } from "express";
import { createProductService, getProductsService } from "../services/productsService";


// Controllador para obtener todos los productos
export const getProductController = async(_: Request, res: Response) => {
    try {
        // caso de exito, envio una respuesta con el producto
        const products = await getProductsService()
        res.status(200).json(products);
    } catch (error: unknown) {
        // Caso de error envio un mensaje con el error
        if(error instanceof Error) {
            res.status(500).json({message: error.message});
        }
    }
}

export const detailProductsController = (_: Request, res: Response) => {
    try {
        // caso de exito, envio una respuesta con el producto
        res.status(200).json('Detalle de un producto')
    } catch (error: unknown) {
        // Caso de error envio un mensaje con el error
        if(error instanceof Error) {
            res.status(500).json({message: error.message});
        }
    }
}

export const searchProductController = (_: Request, res: Response) => {
    try {
        // caso de exito, envio una respuesta con el producto
        res.status(200).json('Busqueda del producto')
    } catch (error: unknown) {
        // Caso de error envio un mensaje con el error
        if(error instanceof Error) {
            res.status(500).json({message: error.message});
        }
    }
}

export const createProductController = async (req: Request, res: Response) => {
    const { name, price, stock, category, images, sizes, colors } = req.body;

    try {
        // Validar los datos requeridos
        if (!name || !price || stock === undefined || !category) {
            return res.status(400).json({ message: "Faltan campos obligatorios" });
        }

        // Llamar al servicio para crear el producto
        const newProduct = await createProductService({
            name,
            price,
            stock,
            category,
            images,
            sizes,
            colors,
        });

        // Respuesta de éxito
        res.status(201).json(newProduct);
    } catch (error: unknown) {
        // Manejo de errores
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
};

export const deleteProductsController = (_: Request, res: Response) => {
    try {
        // caso de exito, envio una respuesta con el producto
        res.status(200).json('Has eliminado un producto')
    } catch (error: unknown) {
        // Caso de error envio un mensaje con el error
        if(error instanceof Error) {
            res.status(500).json({message: error.message});
        }
    }
}

export const updateProductsController = (_: Request, res: Response) => {
    try {
        // caso de exito, envio una respuesta con el producto
        res.status(200).json('Producto _ ha sido actualizado')
    } catch (error: unknown) {
        // Caso de error envio un mensaje con el error
        if(error instanceof Error) {
            res.status(500).json({message: error.message});
        }
    }
}