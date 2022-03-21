import { Router } from "express";
import produtos from "./routes/produtos_route";
import categorias from "./routes/categorias_route";

const router = Router();

router.use("/produtos", produtos);
router.use("/categorias", categorias);

export default router;
