import { DataSource } from "typeorm";
import { Product } from "../entities/Product";
import { Category } from "../entities/Category";
import { Size } from "../entities/Size";
import { Color } from "../entities/Color";
import { Image } from "../entities/Images";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.PGHOST,
  port: Number(process.env.PGPORT),
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  synchronize: true,
  logging: true,
  entities: ["src/entities/**/*.ts"],
  migrations: [],
  subscribers: [],
});

export const ProductModel = AppDataSource.getRepository(Product);

export const CategoryModel = AppDataSource.getRepository(Category);

export const SizeModel = AppDataSource.getRepository(Size);

export const ColorModel = AppDataSource.getRepository(Color);

export const ImageModel = AppDataSource.getRepository(Image);
