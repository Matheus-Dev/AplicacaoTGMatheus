import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AlimentoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AlimentoProvider {

  urlAPI: string = 'assets/dados/alimentos.json';

  constructor(public httpClient: HttpClient) {
    console.log('Hello AlimentoProvider Provider');
  }

  getAlimentos(){
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
