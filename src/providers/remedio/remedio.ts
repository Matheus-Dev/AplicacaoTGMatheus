import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RemedioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RemedioProvider {

  //urlAPI : string = 'http://192.168.0.108:3000/remedios';
  urlAPI: string = 'assets/dados/remedios.json';

  constructor(public httpClient: HttpClient) {
    console.log('Hello RemedioProvider Provider');
  }

  getRemedios(){
    return new Promise(resolve => {
      this.httpClient.get(this.urlAPI).subscribe(data => {
        resolve(data);
      }, err => {
        alert('Provider'+err);
        console.log(err);
      });
    });
  }

}
