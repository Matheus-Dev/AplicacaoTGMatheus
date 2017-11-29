import { Endereco } from './endereco';
export class Proprietario {

    _id: any;
    nome: string;
    cpf: string;
    telefone: string;
    endereco: Endereco;
    haras : any;
    constructor(){
        this.nome = '';
        this.cpf = '';
        this.telefone = '';
        this.endereco = new Endereco();
        this.haras = '';
    }
}