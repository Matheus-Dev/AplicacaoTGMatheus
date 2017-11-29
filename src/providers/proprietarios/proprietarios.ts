import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProprietariosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProprietariosProvider {

  constructor(public httpClient: HttpClient) {
  }

  getProprietarios(){
      return new Promise(resolve => {
        this.httpClient.get('assets/dados/proprietarios.json').subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
      });
  }

}
