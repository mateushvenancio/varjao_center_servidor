import generateUuid from "../tools/id_generator";

export default class ProdutoEntity {
    readonly id: string;
    nome: string;
    preco: number;
    desconto?: number; // porcentagem
    imagens: string[];
    descricao: string;
    declare aaa: string;

    constructor(props: Omit<ProdutoEntity, "id">, id?: string) {
        this.nome = props.nome;
        this.preco = props.preco;
        this.desconto = props.desconto;
        this.imagens = props.imagens;
        this.descricao = props.descricao;

        this.id = id || generateUuid();
    }
}
