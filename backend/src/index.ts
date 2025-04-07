import "dotenv/config";
import { server } from "./server";

const { PORT } = process.env;

server.listen(PORT, () => {
  console.log(`servidor corriendo en el puerto ${PORT} 🚀`);
});
