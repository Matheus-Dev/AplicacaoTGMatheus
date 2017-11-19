import { Veterinario } from './veterinario';
import { Proprietario } from "./proprietario";
import { Haras } from "./haras";

export class Animal {
    id: string;
    nome: string;
    dataNascimento: Date;
    raca: string;
    sexo: string;
    proprietario : Proprietario;
    veterinario: Veterinario;
    image: string;
    haras: Haras;
    
    constructor(){
        this.id = '';
        this.nome = '';
        this.image = 'assets/imgs/cavalo_padrao.jpg';
        this.proprietario = new Proprietario();
        this.veterinario = new Veterinario();
    }
}