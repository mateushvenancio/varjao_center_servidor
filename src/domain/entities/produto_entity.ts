export default interface ProdutoEntity {
    id: string;
    nome: string;
    preco: number;
    porcentagemDesconto?: number;
    imagens: string[];
    descricao: string;

    precoFinal(): number;
}
