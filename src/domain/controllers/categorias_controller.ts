import { Request, Response } from "express";
import InvalidParameterException from "../../core/exceptions/invalid_parameter_exception";
import EmpresaEntity from "../entities/empresa_entity";
import ICategoriasRepository from "../repositories/i_categorias_repository";

export default class CategoriasController {
    constructor(private categoriasRepository: ICategoriasRepository) {}

    async getAllCategorias(req: Request, res: Response): Promise<Response> {
        const result = await this.categoriasRepository.getAllCategorias();
        return res.status(200).json(result);
    }

    async getCategoriaById(req: Request, res: Response): Promise<Response> {
        const id = req.params.id;

        try {
            if (!id) {
                throw new InvalidParameterException("id");
            }
            const result = await this.categoriasRepository.getCategoriaById(id);
            return res.status(200).json(result);
        } catch (error) {
            return res.status(400).json({ error: "" + error });
        }
    }

    async createCategoria(req: Request, res: Response): Promise<Response> {
        const { nome } = req.body;

        try {
            if (!nome) {
                throw new InvalidParameterException("nome");
            }

            await this.categoriasRepository.createCategoria(nome);

            return res.status(201);
        } catch (error) {
            return res.status(400).json({ error: "" + error });
        }
    }
}
