import generateUuid from "../../core/id_generator";
import CategoriaEntity from "./categoria_entity";

export default class ProdutoEntity {
    readonly id: string;
    nome: string;
    preco: number;
    desconto?: number; // porcentagem
    imagens: string[];
    descricao: string;
    categorias: CategoriaEntity[];

    constructor(
        nome: string,
        preco: number,
        imagens: string[],
        desc: string,
        categorias: CategoriaEntity[],
        desconto?: number,
        id?: string
    ) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
        this.imagens = imagens;
        this.descricao = desc;
        this.categorias = categorias;

        this.id = id || generateUuid();
    }
}
