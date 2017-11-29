//import { Colaborador } from './colaborador';
//import { Animal } from './animal';
export class Atividade{

    _id: any;
    codigo: string;
    animal: any;
    detalhesAtividade: Object;
    dataCriacao: Date;
    colaborador: any;
    observacoes: string;

    constructor(){
        
        this.codigo = '';
        this.animal = '';
        this.detalhesAtividade = {};
        this.colaborador = '';
        this.dataCriacao = new Date();
        this.observacoes = '';
    }
}