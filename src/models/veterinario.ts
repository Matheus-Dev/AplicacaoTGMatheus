//import { Haras } from './haras';
import { Endereco } from "./endereco";

export class Veterinario {

    _id: any;
    nome: string;
    cpf: string;
    telefone: string;
    endereco: Endereco;
    haras: any;
    crmv: any;
    isAtivo: boolean;

    constructor(){
        this.nome = '';
        this.cpf = '';
        this.telefone = '';
        this.crmv = {};
        this.endereco = new Endereco();
        this.haras = '';
        this.isAtivo = true;
    }
}