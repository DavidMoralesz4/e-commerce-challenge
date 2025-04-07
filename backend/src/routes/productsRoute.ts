import { Router } from "express";
import { detailProductsController, getProductController, searchProductController } from "../controllers/productsController";


export const productsRoute = Router();

// Obtener todos los productos
productsRoute.get("/products", getProductController);

// Detalle de los productos
productsRoute.get("/products/detail", detailProductsController);

/// Obtener productos por id (buscar un producto)
productsRoute.get("/products/:id", searchProductController);
