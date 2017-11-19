import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {

  urlTeste : string = "http://192.168.0.108:3000";

  constructor(public http: HttpClient) {
  }

  verificarDisponibilidadeAPI(){
    return new Promise(resolve => {
      this.http.get(this.urlTeste+'/').subscribe(data => {
        resolve(data);
      }, err => {
        alert("Tela Provider"+err);
      });
    });
  }

}
