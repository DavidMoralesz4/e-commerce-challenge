import express from 'express';
import cors from "cors";
import morgan from "morgan";
import { productsRoute } from './routes/productsRoute';
import { colorRoute } from './routes/colorRoute';
import { categoriesRoute } from './routes/categoriesRoute';
import { imagesRoute } from './routes/imagesRoute';
import { sizesRoute } from './routes/sizesRoute';

export const server = express();

// Middlewares
server.use(express.json());
server.use(morgan('dev'));
server.use(cors());

// Aquí agregas las rutas
server.use('/api', productsRoute);
server.use('/api', colorRoute)
server.use('/api', categoriesRoute)
server.use('/api', imagesRoute)
server.use('/api', sizesRoute)
