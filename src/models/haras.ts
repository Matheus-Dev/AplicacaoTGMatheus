import { Proprietario } from './proprietario';
import { Endereco } from './endereco';
export class Haras{

    _id: any;
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