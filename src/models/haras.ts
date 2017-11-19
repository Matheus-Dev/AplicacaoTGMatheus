import { Proprietario } from './colaborador';
import { Endereco } from './endereco';
export class Haras{

    codigo: string;
    nomeFantasia: string;
    razaoSocial: string;
    inscricaoEstadual: string;
    proprietario: Proprietario;
    endereco: Endereco;

    constructor() {
        
        this.codigo = '';
        this.nomeFantasia = '';
        this.razaoSocial = '';
        this.inscricaoEstadual = '';
        this.proprietario = new Proprietario();
        this.endereco = new Endereco(); 
    }
}