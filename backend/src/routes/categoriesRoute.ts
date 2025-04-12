import {Router} from 'express'
import { createCategoryController, getAllCategoriesController, getCategoryByIdController } from '../controllers/categoriesController';

export const categoriesRoute = Router()

categoriesRoute.get('/categories', getAllCategoriesController);

categoriesRoute.post('/categories', createCategoryController)

categoriesRoute.get('/categoires:id', getCategoryByIdController)
