import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AlimentoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AlimentoProvider {

  urlApi : string = 'http://192.168.0.108:3000';
  //urlApi: string = 'assets/dados/alimentos.json';

  constructor(public httpClient: HttpClient) {
    console.log('Hello AlimentoProvider Provider');
  }

  getAlimentos(id){
    let api = this.urlApi+'/alimento/'+id;

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

  getAlimentosValidos(id){
    let api = this.urlApi+'/alimento/validos/'+id;

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

  salvarAlimento(data){
    let api = this.urlApi+'/alimento/adicionar';

    return new Promise((resolve, reject) => {
      this.httpClient.post(api, JSON.stringify(data), {
        headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
      })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  atualizarAlimento(data){
    let api = this.urlApi+'/alimento/atualizar/'+data._id;

    return new Promise((resolve, reject) => {
      this.httpClient.put(api, JSON.stringify(data), {
        headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
      })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  deletarAlimento(data){
    let api = this.urlApi+'/alimento/excluir/'+data._id;

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
