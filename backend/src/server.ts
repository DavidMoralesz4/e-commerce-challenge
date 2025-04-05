import express from 'express';
import cors from "cors";
import morgan from "morgan";

export const server = express();

// Middlewares
server.use(express.json());
server.use(morgan('dev'));
server.use(cors());

// Aquí agregas las rutas
