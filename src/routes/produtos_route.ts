import { Router } from "express";
import ProdutosController from "../controllers/produtos_controller";
import MemoriaProdutosRepository from "../providers/memoria/memoria_produtos_repository";
import IProdutosRepository from "../repositories/i_podutos_repository";

const router = Router();

const repository: IProdutosRepository = new MemoriaProdutosRepository();
const controller: ProdutosController = new ProdutosController(repository);

router.get("/", async (req, res) => {
    return await controller.getAllProdutos(req, res);
});
router.get("/:id", async (req, res) => {
    return await controller.getProdutoById(req, res);
});
router.post("/", async (req, res) => {
    console.log("Body2: ", req.body);
    return await controller.createProduto(req, res);
});

export default router;
