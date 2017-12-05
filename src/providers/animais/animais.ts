import { VeterinariosProvider } from './../veterinarios/veterinarios';
import { ProprietariosProvider } from './../proprietarios/proprietarios';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Animal } from '../../models/animal';

/*
  Generated class for the AnimaisProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AnimaisProvider {

  urlApi : string = 'http://192.168.0.108:3000';
  //urlAPI: string = 'assets/dados/animais.json';
  //'assets/dados/animais.json'

  constructor(public httpClient: HttpClient,
              public veterinarioProvider: VeterinariosProvider,
              public proprietarioProvider: ProprietariosProvider) {
              console.log('Hello AnimaisProvider Provider');
  }
  
  getAnimais(id){
    let api = this.urlApi+'/animal//buscar/todos/'+id;

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

  getAnimaisAtivos(id){
    let api = this.urlApi+'/animal/buscar/ativos/'+id;

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

  salvarAnimal(data){
    let api = this.urlApi+'/animal/adicionar';

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

  atualizarAnimal(data){
    let api = this.urlApi+'/animal/atualizar/'+data._id;

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

  deletarAnimal(data){
    let api = this.urlApi+'/animal/excluir/'+data._id;

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
