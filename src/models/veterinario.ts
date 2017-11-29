//import { Haras } from './haras';
import { Endereco } from "./endereco";

export class Veterinario {

    _id: any;
    nome: string;
    cpf: string;
    telefone: string;
    endereco: Endereco;
    //haras: Haras;
    haras: any;
    crmv: {
            uf: string, 
            inscricao: string, 
            classe: string
    };
    constructor(){
        this.nome = '';
        this.cpf = '';
        this.telefone = '';
        this.crmv = {
            uf: '',
            inscricao: '',
            classe: ''    
        }
        this.endereco = new Endereco();
        //this.haras = new Haras();
        this.haras = '';
    }
}