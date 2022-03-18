import ProdutoEntity from "../../../domain/entities/produto_entity";
import IProdutosRepository from "../../../domain/repositories/i_podutos_repository";
import ProdutoModel from "../models/produto_model";

class MemoriaProdutosRepository implements IProdutosRepository {
    private produtos: ProdutoModel[] = [
        new ProdutoModel("0", "Chocolate", 2),
        new ProdutoModel("1", "Coca Cola", 10),
        new ProdutoModel("2", "Rapadura", 15),
        new ProdutoModel("3", "Sonho de valsa", 1.5),
    ];

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
