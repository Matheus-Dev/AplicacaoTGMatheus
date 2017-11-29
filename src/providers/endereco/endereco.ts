import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the EnderecoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EnderecoProvider {

  estados : string = 'assets/dados/estados.json';

  constructor(public httpClient: HttpClient) {
    console.log('Hello EnderecoProvider Provider');
  }

  getSiglasEstados(){
    return new Promise(resolve => {
      this.httpClient.get(this.estados).subscribe(data => {
        resolve(data);
      }, err => {
        alert('Provider'+err);
        console.log(err);
      });
    });
  }

}
