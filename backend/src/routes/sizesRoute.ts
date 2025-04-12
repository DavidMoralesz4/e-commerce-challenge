import {Router} from 'express'
import { createSizeController, getAllSizesController } from '../controllers/sizesController';


export const sizesRoute = Router();

sizesRoute.get('/sizes', getAllSizesController)

sizesRoute.post('/sizes', createSizeController)
