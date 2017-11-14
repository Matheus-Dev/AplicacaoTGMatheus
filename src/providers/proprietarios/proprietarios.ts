import { Proprietario } from './../../models/proprietario';
//import { Proprietario } from '../../models/proprietario';
import { HttpClient } from '@angular/common/http';
//import {Http, Response} from '@angular/http'
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

  inicializarProprietario() : Proprietario{
    return {
      id: '',
      nome: ''
    }
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
