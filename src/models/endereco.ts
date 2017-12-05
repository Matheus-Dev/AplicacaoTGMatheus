export class Endereco {
    logradouro: string;
    bairro: string;
    localidade: string;
    uf: string;
    cep: string;
    numero: string;

    constructor(){
        this.logradouro= '';
        this.bairro= '';
        this.localidade= '';
        this.uf= '';
        this.cep= '';
        this.numero= '';
    }
}