import { Router } from "express";
import ProdutosController from "../controllers/produtos_controller";
import MongoProdutosRepository from "../data/mongodb/repositories/mongo_produtos_repository";
import IProdutosRepository from "../domain/repositories/i_podutos_repository";

const router = Router();

const repository: IProdutosRepository = new MongoProdutosRepository();
const controller: ProdutosController = new ProdutosController(repository);

router.get("/", async (req, res) => {
    return await controller.getAllProdutos();
});

export default router;
