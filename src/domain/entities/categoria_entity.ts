import generateUuid from "../../core/id_generator";

export default class CategoriaEntity {
    readonly id: string;
    nome: string;
    ativo: boolean;

    constructor(nome: string, id?: string, ativo?: boolean) {
        this.nome = nome;
        this.id = id || generateUuid();
        this.ativo = !(ativo === false);
    }
}
