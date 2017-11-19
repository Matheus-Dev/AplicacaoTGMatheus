import { VeterinariosProvider } from './../veterinarios/veterinarios';
import { ProprietariosProvider } from './../proprietarios/proprietarios';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Animal } from '../../models/animal';

/*
  Generated class for the AnimaisProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AnimaisProvider {

  urlAPI : string = 'http://192.168.0.108:3000/animal';

  //'assets/dados/animais.json'

  constructor(public httpClient: HttpClient,
              public veterinarioProvider: VeterinariosProvider,
              public proprietarioProvider: ProprietariosProvider) {
              console.log('Hello AnimaisProvider Provider');
  }
  
  getAnimais(){
    return new Promise(resolve => {
      this.httpClient.get(this.urlAPI).subscribe(data => {
        resolve(data);
      }, err => {
        alert('Provider'+err);
        console.log(err);
      });
    });
  }

}
