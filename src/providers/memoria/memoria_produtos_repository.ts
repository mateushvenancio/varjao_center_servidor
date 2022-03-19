import ProdutoEntity from "../../domain/entities/produto_entity";
import IProdutosRepository from "../../domain/repositories/i_podutos_repository";

class MemoriaProdutosRepository implements IProdutosRepository {
    private produtos: ProdutoEntity[] = [];

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
    async createProduto(
        props: Omit<ProdutoEntity, "id">
    ): Promise<ProdutoEntity> {
        const nome = props.nome;
        const preco = props.preco;
        const imagens = props.imagens;
        const desc = props.descricao;
        const desconto = props.desconto;

        const produto = new ProdutoEntity(nome, preco, imagens, desc, desconto);

        this.produtos.push(produto);

        return produto;
    }
}

export default MemoriaProdutosRepository;
