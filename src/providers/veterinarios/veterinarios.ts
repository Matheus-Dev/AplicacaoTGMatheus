import { EnderecoProvider } from './../endereco/endereco';
import { Veterinario } from '../../models/veterinario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the VeterinariosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VeterinariosProvider {

  constructor(public httpClient: HttpClient,
              public enderecoProvider: EnderecoProvider) {
    console.log('Hello VeterinariosProvider Provider');
  }

  inicializarVeterinario() : Veterinario{
    return {
        id: '',
        nome: '',
        endereco: this.enderecoProvider.inicializarEndereco()
    }
  }

  getVeterinarios(){
    return new Promise(resolve => {
      this.httpClient.get('assets/dados/veterinarios.json').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
}

}
