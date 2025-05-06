
import express from "express"
import categoriasRoutes from "./routes/categorias.routes.js"
import clientesRoutes from "./routes/clientes.routes.js" 
import empleadoRoutes from "./routes/empleados.routes.js"
import productoRoutes from "./routes/productos.routes.js"
import cors from  "cors"

const app = express(); 

app.use(cors());

app.use(express.json());

app.set("port",5000);
app.use("/api/categorias",categoriasRoutes)
app.use("/api/clientes",clientesRoutes)
app.use("/api/empleados",empleadoRoutes)
app.use("/api/productos",productoRoutes)

export default app ; 