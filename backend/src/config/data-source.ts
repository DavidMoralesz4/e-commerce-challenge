import 'reflect-metadata';
import { DataSource } from "typeorm";
import { Product } from "../entities/Product";
import { Category } from "../entities/Category";
import { Color } from "../entities/Color";
import { Size } from "../entities/Size";
import { DATABASE_URL, PGDATABASE, PGHOST, PGPASSWORD, PGPORT, PGUSER,  } from "..";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: PGHOST,
    port: Number(PGPORT),
    username: PGUSER,
    password: PGPASSWORD,
    database: PGDATABASE,
    synchronize: true,
    logging: true,
    entities: [Product, Category, Color, Size, Image],
    subscribers: [],
    migrations: [],
})