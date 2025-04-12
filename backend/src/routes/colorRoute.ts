import {Router} from 'express'
import { createColorsController, getColorsController } from '../controllers/colorsController';

export const colorRoute = Router()

colorRoute.get('/colors', getColorsController);

colorRoute.post('/colors', createColorsController);
