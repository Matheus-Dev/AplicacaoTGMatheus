import { Endereco } from './endereco';
export class Proprietario {
    id: string;
    nome: string;
    endereco: Endereco;

    constructor(){
        this.id = '';
        this.nome = '';
        this.endereco = new Endereco();
    }
}