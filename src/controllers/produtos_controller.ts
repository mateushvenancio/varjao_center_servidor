import { Request, Response, Router } from "express";
import ProdutoEntity from "../entities/produto_entity";

import IProdutosRepository from "../repositories/i_podutos_repository";

class ProdutosController {
    constructor(private repo: IProdutosRepository) {}

    async getAllProdutos(req: Request, res: Response): Promise<Response> {
        const produtos = await this.repo.getAllProdutos();
        return res.status(200).json(produtos);
    }

    async getProdutoById(req: Request, res: Response): Promise<Response> {
        const id = req.params.id;
        if (!id) {
            return res.status(400).json({
                error: "ID do produto não enviado",
            });
        }
        try {
            const produto = await this.repo.getProdutoById(id);
            return res.status(200).json(produto);
        } catch (error) {
            return res.status(404).json({
                message: error,
            });
        }
    }

    async createProduto(req: Request, res: Response): Promise<Response> {
        try {
            const nome: string = req.body.nome;
            const preco: number = req.body.preco;
            const desconto: number = req.body.preco;
            const imagens: string[] = req.body.nome;
            const descricao: string = req.body.nome;

            const props = {
                nome,
                preco,
                desconto,
                imagens,
                descricao,
            };

            const produto = await this.repo.createProduto(props);
            return res.status(201).json(produto);
        } catch (error) {
            return res.status(400).json({ error: "" + error });
        }
    }
}

export default ProdutosController;
