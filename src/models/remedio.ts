//import { Haras } from './haras';
export class Remedio {

    _id: any;
    nome: string;
    lote: string;
    tipo: string;
    dataValidade: Date;
    observacoes: string;
    //haras: Haras;
    haras: any;

    constructor() {
        this.nome = '';
        this.lote = '';
        this.tipo = '';
        this.dataValidade = new Date();
        this.observacoes = '';
        //this.haras = new Haras();
        this.haras = '';
    }
}