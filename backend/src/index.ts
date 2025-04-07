import 'reflect-metadata';
import { server } from "./server";
import { AppDataSource } from "./config/data-source";

import dotenv from 'dotenv'

dotenv.config()
export const { PORT, PGPASSWORD, DATABASE_URL, PGPORT, PGHOST, PGUSER, PGDATABASE } = process.env;

const connection = async () => {
    try {
      await AppDataSource.initialize();
      console.log("Connected to database successfully");
  
      server.listen(PORT, () => {
        console.log(`server running in port ${PORT} 🚀`);
      });
    } catch (error) {
      console.error("Error during database connection or server startup:", error);
      process.exit(1)
    }
  };
  
  connection();