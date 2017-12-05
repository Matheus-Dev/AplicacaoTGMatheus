import { Endereco } from './endereco';
export class Colaborador {
    _id: any;
    nome: string;
    cpf: string;
    telefone: string;
    login: string;
    senha: string;
    funcao: string;
    isAtivo: boolean;
    admin: boolean;
    endereco: Endereco;
    haras: string;

    constructor(){
        this.nome = '';
        this.cpf = '';
        this.telefone = '';
        this.login = '';
        this.senha = '';
        this.funcao = '';
        this.isAtivo = true;
        this.admin = false;
        this.endereco = new Endereco();
        this.haras = '';
    }
}