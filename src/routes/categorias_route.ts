import { Router } from "express";
import CategoriasController from "../domain/controllers/categorias_controller";
import ICategoriasRepository from "../domain/repositories/i_categorias_repository";
import MemoriaCategoriasRepository from "../providers/memoria/memoria_categorias_repository";

const router = Router();

const repository: ICategoriasRepository = new MemoriaCategoriasRepository();
const controller: CategoriasController = new CategoriasController(repository);

router.get("/", async (req, res) => {
    return await controller.getAllCategorias(req, res);
});
router.get("/:id", async (req, res) => {
    return await controller.getCategoriaById(req, res);
});
router.post("/", async (req, res) => {
    return await controller.createCategoria(req, res);
});

export default router;
