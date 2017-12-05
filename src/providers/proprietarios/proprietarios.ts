import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProprietariosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProprietariosProvider {

  urlApi : string = "http://192.168.0.104:3000";

  constructor(public httpClient: HttpClient) {
  }

  getProprietarios(id){
    let api = this.urlApi+'/proprietarios/buscar/todos/'+id;

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

  getProprietariosAtivos(id){
    let api = this.urlApi+'/proprietario/buscar/ativos/'+id;

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

  salvarProprietario(data){
    let api = this.urlApi+'/proprietario/adicionar';

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

  atualizarProprietario(data){
    let api = this.urlApi+'/proprietario/atualizar/'+data._id;

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

  deletarProprietario(data){
    let api = this.urlApi+'/proprietario/excluir/'+data._id;

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
