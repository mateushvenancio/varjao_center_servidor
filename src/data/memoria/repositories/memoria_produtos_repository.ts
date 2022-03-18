import ProdutoEntity from "../../../domain/entities/produto_entity";
import IProdutosRepository from "../../../domain/repositories/i_podutos_repository";
import ProdutoModel from "../models/produto_model";

class MemoriaProdutosRepository implements IProdutosRepository {
    private produtos: ProdutoModel[] = [];

    async getProdutoById(id: string | number): Promise<ProdutoEntity> {
        const produto = this.produtos.find((e) => e.id == id);
        if (!produto) {
            throw "Produto não encontrado";
        }
        return produto;
    }
    async getAllProdutos(): Promise<ProdutoEntity[]> {
        return this.produtos;
    }
}

export default MemoriaProdutosRepository;
