import { Request, Response, Router } from "express";
import validateSchema from "../../core/validate_schema";
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
            const schema = {
                type: "object",
                properties: {
                    nome: { type: "string" },
                    preco: { type: "number" },
                    imagens: { type: "array" },
                    descricao: { type: "string" },
                    desconto: { type: "number" },
                },
                required: ["nome", "preco", "imagens", "descricao"],
                additionalProperties: false,
            };

            const validate = validateSchema(schema, req.body);

            if (!validate) {
                throw new Error("Parametros incorretos.");
            }

            const produto = await this.repo.createProduto(req.body);
            return res.status(201).json(produto);
        } catch (error) {
            return res.status(400).json({
                error: "" + error,
            });
        }
    }
}

export default ProdutosController;
