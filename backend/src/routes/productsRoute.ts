import { Router } from "express";
import {
  createProductController,
  deleteProductsController,
  detailProductsController,
  getProductsController,
  searchProductController,
  updateProductsController,
} from "../controllers/productsController";

export const productsRoute = Router();

// Obtener todos los productos
productsRoute.get("/products", getProductsController);
// Detalle de los productos
productsRoute.get("/products/detail", detailProductsController);

/// Obtener productos por id (buscar un producto)
productsRoute.get("/products/:id", searchProductController);

// Crear productos
productsRoute.post("/products", createProductController);

// Eliminar Productos
productsRoute.delete("/products/:id", deleteProductsController);

// Actualiar Productos
productsRoute.put("/prducts/:id", updateProductsController);
