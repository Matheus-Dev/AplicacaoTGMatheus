//import { Haras } from './haras';
export class Remedio {

    _id: any;
    nome: string;
    lote: string;
    tipo: string;
    dataValidade: Date;
    observacoes: string;
    haras: any;
    isValido: boolean;

    constructor() {
        this.nome = '';
        this.lote = '';
        this.tipo = '';
        this.dataValidade = new Date();
        this.observacoes = '';
        this.haras = '';
        this.isValido = true;
    }
}