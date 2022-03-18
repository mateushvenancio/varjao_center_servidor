import { Request, Response, Router } from "express";
import ProdutoEntity from "../domain/entities/produto_entity";

import IProdutosRepository from "../domain/repositories/i_podutos_repository";

class ProdutosController {
    constructor(private repo: IProdutosRepository) {}

    async getAllProdutos(
        request: Request,
        response: Response
    ): Promise<Response> {
        const produtos = await this.repo.getAllProdutos();
        return response.status(200).json(produtos);
    }

    async getProdutoById(
        request: Request,
        response: Response
    ): Promise<Response> {
        const id = request.params.id;
        if (!id) {
            return response.status(400).json({
                error: "ID do produto não enviado",
            });
        }
        try {
            const produto = await this.repo.getProdutoById(id);
            return response.status(200).json(produto);
        } catch (error) {
            return response.status(404).json({
                message: error,
            });
        }
    }
}

export default ProdutosController;
