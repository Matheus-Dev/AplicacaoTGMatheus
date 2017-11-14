import { VeterinariosProvider } from './../veterinarios/veterinarios';
import { ProprietariosProvider } from './../proprietarios/proprietarios';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Animal } from '../../models/animal';

/*
  Generated class for the AnimaisProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AnimaisProvider {

  constructor(public httpClient: HttpClient,
              public veterinarioProvider: VeterinariosProvider,
              public proprietarioProvider: ProprietariosProvider) {
              console.log('Hello AnimaisProvider Provider');
  }

  inicializarAnimal () : Animal{
    return {
      id: '',
      nome: '',
      proprietario: this.proprietarioProvider.inicializarProprietario(),
      veterinario: this.veterinarioProvider.inicializarVeterinario()
    }
  }
  
  getAnimais(){
    return new Promise(resolve => {
      this.httpClient.get('assets/dados/animais.json').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}
