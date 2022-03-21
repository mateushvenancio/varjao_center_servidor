import CategoriaEntity from "../entities/categoria_entity";

export default interface ICategoriasRepository {
    getAllCategorias(): Promise<CategoriaEntity[]>;
    getActiveCategorias(): Promise<CategoriaEntity[]>;
    getCategoriaById(id: string): Promise<CategoriaEntity>;
    createCategoria(nome: string): Promise<void>;
    getCategoriasByMultipleIds(ids: string[]): Promise<CategoriaEntity[]>;
}
