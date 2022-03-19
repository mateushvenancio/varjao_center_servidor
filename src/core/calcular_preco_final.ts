import ProdutoEntity from "../entities/produto_entity";

const calcularPrecoFinalProduto = (produto: ProdutoEntity) => {
    const preco = produto.preco;
    const desc = produto.desconto;

    if (!desc) {
        return preco;
    }

    const precoDescontado = preco * (desc / 100);
    const result = preco - precoDescontado;

    return Math.round((result + Number.EPSILON) * 100) / 100;
};

export default calcularPrecoFinalProduto;
