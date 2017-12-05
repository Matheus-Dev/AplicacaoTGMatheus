import { GlobalvariablesProvider } from './../globalvariables/globalvariables';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the HarasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HarasProvider {

  urlApi : string = "http://192.168.0.106:3000";  

  constructor(public httpClient: HttpClient, public global: GlobalvariablesProvider) {
    console.log('Hello HarasProvider Provider');
  }

  getHaras(){
    let api = this.urlApi+'/haras/';

    return new Promise(resolve => {
      this.httpClient.get(api, {
        headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
      }).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  validarHaras(data){
    let api = this.urlApi+'/haras/registrado/'+data;
    
    return new Promise(resolve => {
      this.httpClient.get(api, {
        headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
      }).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getHarasRegistrados(){
    let api = this.urlApi+'/haras/ativos/';

      return new Promise(resolve => {
        this.httpClient.get(api, {
          headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
        }).subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
      });
  }

  salvarHaras(data){
    let api = this.urlApi+'/haras/adicionar';
    let error = '';
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, JSON.stringify(data), {
        headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
      })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          for (let key in err.error.data){
            let attrName = key;
            var attrValue = err.error[key];
            error = error + ' ' + attrName + ' ' + attrValue + '\n';
          } 
          alert(error);
          //alert(err.data.errors.codigo.message);
          //reject(err);
        });
    });
  }

  atualizarAtualizar(data){
    let api = this.urlApi+'/haras/atualizar/'+data._id;

    return new Promise((resolve, reject) => {
      this.httpClient.put(api, JSON.stringify(data),{
        headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
      })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  deletarHaras(data){
    let api = this.urlApi+'/haras/excluir/'+data._id;

    return new Promise((resolve, reject) => {
      this.httpClient.delete(api, {
        headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
      })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
