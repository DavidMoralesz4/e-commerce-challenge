import {Router} from 'express'
import { createImagesController } from '../controllers/imagesController';

export const imagesRoute = Router()

imagesRoute.post('/images/:productId', createImagesController);