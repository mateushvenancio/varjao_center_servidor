import ProdutoEntity from "../../../domain/entities/produto_entity";

export default class ProdutoModel implements ProdutoEntity {
    id: string;
    nome: string;
    preco: number;

    constructor(id: string, nome: string, preco: number) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }
}
