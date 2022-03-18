import ProdutoEntity from "../../../domain/entities/produto_entity";

export default class ProdutoModel implements ProdutoEntity {
    id: string;
    nome: string;
    preco: number;
    porcentagemDesconto?: number | undefined;
    imagens: string[];
    descricao: string;

    constructor(
        id: string,
        nome: string,
        preco: number,
        imagens: string[],
        desc: string,
        porcentagemDesconto?: number
    ) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.porcentagemDesconto = porcentagemDesconto;
        this.imagens = imagens;
        this.descricao = desc;
    }

    precoFinal(): number {
        if (!this.porcentagemDesconto) {
            return this.preco;
        }

        return this.preco - (this.preco / 100) * this.porcentagemDesconto;
    }
}
