import generateUuid from "../../core/id_generator";

export default class ProdutoEntity {
    readonly id: string;
    nome: string;
    preco: number;
    desconto?: number; // porcentagem
    imagens: string[];
    descricao: string;

    constructor(
        nome: string,
        preco: number,
        imagens: string[],
        desc: string,
        desconto?: number,
        id?: string
    ) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
        this.imagens = imagens;
        this.descricao = desc;

        this.id = id || generateUuid();
    }
}
