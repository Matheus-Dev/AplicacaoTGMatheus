import { Endereco } from './endereco';
export interface Proprietario {
    id: string;
    nome: string;
    endereco: Endereco;
}