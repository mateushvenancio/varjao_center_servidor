import ProdutoEntity from "../../../domain/entities/produto_entity";
import IProdutosRepository from "../../../domain/repositories/i_podutos_repository";

class MongoProdutosRepository implements IProdutosRepository {
    async getProdutoById(id: string | number): Promise<ProdutoEntity> {
        throw new Error("Method not implemented.");
    }
    async getAllProdutos(): Promise<ProdutoEntity[]> {
        return [];
    }
}

export default MongoProdutosRepository;
