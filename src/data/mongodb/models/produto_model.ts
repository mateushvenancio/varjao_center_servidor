import ProdutoEntity from "../../../domain/entities/produto_entity";

export default class ProdutoModel implements ProdutoEntity {
    nome: string;
    qtdd: number;

    constructor() {}
}
