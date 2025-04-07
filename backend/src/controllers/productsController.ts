import { Request, Response } from "express";


// Controllador para obtener todos los productos
export const getProductController = (_: Request, res: Response) => {
    try {
        // caso de exito, envio una respuesta con el producto
        res.status(200).json('Todos los productos')
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