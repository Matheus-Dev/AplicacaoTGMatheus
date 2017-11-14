import { Veterinario } from './veterinario';
import { Proprietario } from "./proprietario";

export interface Animal {
    id: string;
    nome: string;
    proprietario : Proprietario;
    veterinario: Veterinario;
}