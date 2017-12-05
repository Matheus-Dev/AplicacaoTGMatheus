//import { Haras } from './haras';
export class Alimento {
    _id: any;
    marca: string;
    tipo: string;
    codigoBarras: string;
    unidade: string;
    dataValidade: Date;
    haras: any;
    isValido: boolean;
    
    constructor() {
        this.marca = '';
        this.tipo = '';
        this.codigoBarras = '';
        this.unidade = '';
        this.dataValidade = new Date();
        this.haras = '';
        this.isValido = true;
    }
}