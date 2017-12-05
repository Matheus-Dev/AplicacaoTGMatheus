import { Proprietario } from './proprietario';
import { Endereco } from './endereco';
export class Haras{

    _id: any;
    codigo: string;
    razaoSocial: string;
    inscricaoEstadual: string;
    registrou: boolean;
    proprietario: any;
    endereco: Endereco;

    constructor() {
        this.codigo = this.gerarCodigo();
        this.razaoSocial = '';
        this.inscricaoEstadual = '';
        this.registrou = false;
        this.proprietario = {};
        this.endereco = new Endereco(); 
    }

    gerarCodigo(){
        let min = 10000;
        let max = 99999;
        let result = 0;
        min = Math.ceil(min);
        max = Math.floor(max);
        result = Math.floor(Math.random() * (max - min)) + min;
        return result.toString();
    }
}