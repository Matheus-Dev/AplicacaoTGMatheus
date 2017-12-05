import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ColaboradorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ColaboradorProvider {

  urlApi : string = 'http://192.168.0.108:3000';

  constructor(public httpClient: HttpClient) {
    console.log('Hello ColaboradorProvider Provider');
  }

  getColaboradores(id){
    let api = this.urlApi+'/colaborador/buscar/todos/'+id;

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

  getColaboradoresValidos(id){
    let api = this.urlApi+'/colaborador/buscar/ativos/'+id;

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

  salvarColaborador(data){
    let api = this.urlApi+'/colaborador/adicionar';

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

  atualizarColaborador(data){
    let api = this.urlApi+'/colaborador/atualizar/'+data._id;

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

  deletarColaborador(data){
    let api = this.urlApi+'/colaborador/excluir/'+data._id;

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
