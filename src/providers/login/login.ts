import { GlobalvariablesProvider } from './../globalvariables/globalvariables';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {

  urlApi : string = "http://192.168.0.106:3000";

  constructor(public http: HttpClient, public global: GlobalvariablesProvider) {
  }

  verificarDisponibilidadeAPI(){
    return new Promise(resolve => {
      this.http.get(this.urlApi+'/', {
        headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
      }).subscribe(data => {
        resolve(data);
      }, err => {
        //alert("Tela Provider"+err);
      });
    });
  }

  realizarLogin(colaborador: any){
    let error = '';

    let api = '/colaborador/authenticate/'
    +colaborador.codigo+'/'
    +colaborador.login+'/'
    +colaborador.senha;

    return new Promise(resolve => {
      this.http.get(this.urlApi+api, {
        headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
      }).subscribe(data => {
        resolve(data);
      }, err => {
        for (let key in err){
          let attrName = key;
          var attrValue = err[key];
          error = error + ' ' + attrName + ' ' + attrValue + '\n';
        } 
        alert(error);
      });
    });
  }

}
