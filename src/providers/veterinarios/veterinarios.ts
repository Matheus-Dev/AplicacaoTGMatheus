import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
/*
  Generated class for the VeterinariosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VeterinariosProvider {

  urlApi : string = 'http://192.168.0.108:3000';

  constructor(public httpClient: HttpClient) {
    console.log('Hello VeterinariosProvider Provider');
  }

  getVeterinarios(){
    let api = this.urlApi+'/veterinario/buscar/todos/';

      return new Promise(resolve => {
        this.httpClient.get(api).subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
      });
  }

  getVeterinariosValidos(){
    let api = this.urlApi+'/veterinario/buscar/ativos/';

      return new Promise(resolve => {
        this.httpClient.get(api).subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
      });
  }

  salvarVeterinario(data){
    let api = this.urlApi+'/veterinario/adicionar';

    return new Promise((resolve, reject) => {
      this.httpClient.post(api, JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  atualizarVeterinario(data){
    let api = this.urlApi+'/veterinario/atualizar/'+data._id;

    return new Promise((resolve, reject) => {
      this.httpClient.put(api, JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  deletarVeterinario(data){
    let api = this.urlApi+'/veterinario/excluir/'+data._id;

    return new Promise((resolve, reject) => {
      this.httpClient.delete(api)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
