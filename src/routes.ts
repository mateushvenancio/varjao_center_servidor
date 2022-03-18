import { Router } from "express";
import produtos from "./routes/produtos_route";

const router = Router();

router.use("/produtos", produtos);

export default router;
