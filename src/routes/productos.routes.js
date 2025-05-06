import {Router} from "express" ; 
import { methodHTTP as productoController } from "../controllers/productos.controllers.js";
const router  = Router()  ;


router.get("/",productoController.getProductos);
router.put("/:id",productoController.updateProductos);

export default router; 