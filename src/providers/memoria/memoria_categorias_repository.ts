import InvalidParameterException from "../../core/exceptions/invalid_parameter_exception";
import CategoriaEntity from "../../domain/entities/categoria_entity";
import categoria_entity from "../../domain/entities/categoria_entity";
import ICategoriasRepository from "../../domain/repositories/i_categorias_repository";

export default class MemoriaCategoriasRepository
    implements ICategoriasRepository
{
    private categorias: CategoriaEntity[] = [
        new CategoriaEntity("Alimentação"),
        new CategoriaEntity("Limpeza", "", false),
        new CategoriaEntity("Geral", "", true),
    ];

    async getAllCategorias(): Promise<CategoriaEntity[]> {
        return this.categorias;
    }

    async getActiveCategorias(): Promise<CategoriaEntity[]> {
        return this.categorias.filter((element) => element.ativo);
    }

    async getCategoriaById(id: string): Promise<CategoriaEntity> {
        if (!id) {
            throw new InvalidParameterException("id");
        }

        const result = this.categorias.find((el) => el.id == id);

        if (!result) {
            throw new Error("Not found");
        }

        return result;
    }

    async createCategoria(nome: string): Promise<void> {
        if (!nome) {
            throw new InvalidParameterException("nome");
        }

        const categoria = new CategoriaEntity(nome);

        this.categorias.push(categoria);
    }

    async getCategoriasByMultipleIds(
        ids: string[]
    ): Promise<CategoriaEntity[]> {
        return this.categorias.filter((el) => ids.includes(el.id));
    }
}
