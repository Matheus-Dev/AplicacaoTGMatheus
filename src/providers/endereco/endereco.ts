import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Endereco } from '../../models/endereco';

/*
  Generated class for the EnderecoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EnderecoProvider {

  urlApi = "https://webmaniabr.com/api/1/cep/";
  app_key="GU7iuXdJpEd8i8F5PqLJiHJXuy9jEbSa";
  app_secret="ugMpCk2rADvdubgb7YC2ruO7dwoj6LR78AFj4PdIbIuzxp3H";

  constructor(public httpClient: HttpClient) {
  }

  inicializarEndereco () : Endereco{
    return {
      endereco: '',
      bairro: '',
      cidade: '',
      uf: '',
      cep: '',
      numero: ''
    }
  }

  getCep(cep){
    return new Promise(resolve => {
      this.httpClient.get(
        this.urlApi+
        cep+
        ""+
        this.app_key+
        "&"+
        this.app_secret
      ).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}
