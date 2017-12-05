//import { Colaborador } from './colaborador';
//import { Animal } from './animal';
export class Atividade{

    _id: any;
    codigo: number;
    animal: any;
    tipo: string;
    detalhesAtividade: Object;
    dataCriacao: Date;
    colaborador: any;
    observacoes: string;
    haras: any;

    constructor(){
        
        //this.codigo = 0;
        this.animal = '';
        this.detalhesAtividade = {};
        this.colaborador = '';
        this.dataCriacao = new Date();
        this.observacoes = '';
        this.haras = '';
    }
}