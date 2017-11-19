import { Endereco } from './endereco';
export class Proprietario {
    nome: string;
    cpf: string;
    login: string;
    senha: string;
    funcao: string;
    isAtivo: boolean;
    endereco: Endereco;
    haras: string;

    constructor(){
        this.nome = '';
        this.cpf = '';
        this.login = '';
        this.senha = '';
        this.funcao = '';
        this.isAtivo = true;
        this.endereco = new Endereco();
        this.haras = '';
    }
}