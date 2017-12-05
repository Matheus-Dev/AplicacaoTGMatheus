//import { Veterinario } from './veterinario';
//import { Proprietario } from "./proprietario";
//import { Haras } from "./haras";

export class Animal {
    _id: any;
    codigo: string;
    nome: string;
    dataNascimento: Date;
    raca: string;
    sexo: string;
    image: string;
    haras: any;
    proprietario: any;
    veterinario: any;  
    isAtivo: boolean;  
    constructor(){
        this.codigo = '';
        this.nome = '';
        this.dataNascimento = new Date();
        this.raca = '';
        this.sexo = '';
        this.image = 'assets/imgs/cavalo_padrao.jpg';
        this.proprietario = '';
        this.veterinario = '';
        this.haras = '';
        this.isAtivo = true;
    }
}