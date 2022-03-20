import ProdutoEntity from "../entities/produto_entity";

export default interface IProdutosRepository {
    getAllProdutos(): Promise<ProdutoEntity[]>;
    getProdutoById(id: number | string): Promise<ProdutoEntity>;
    createProduto(props: Omit<ProdutoEntity, "id">): Promise<ProdutoEntity>;
}
