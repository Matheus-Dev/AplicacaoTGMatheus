import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the EnderecoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EnderecoProvider {

  estados : string = 'assets/dados/estados.json';
  //urlAPIEnrececo = 'https://viacep.com.br/ws/12722-040/json/';

  constructor(public httpClient: HttpClient) {
    console.log('Hello EnderecoProvider Provider');
  }

  getSiglasEstados(){
    return new Promise(resolve => {
      this.httpClient.get(this.estados).subscribe(data => {
        resolve(data);
      }, err => {
        alert('Provider'+err);
        console.log(err);
      });
    });
  }

  getCep(cep){
    return new Promise(resolve => {
      this.httpClient.get('https://viacep.com.br/ws/'+cep+'/json/').subscribe(data => {
        resolve(data);
      }, err => {
        let dados = '';
        for (let key in err){
          let attrName = key;
          let attrValue = err[key];
          dados = dados + ' ' +attrName+' '+attrValue+' \n';
        }
        alert('Error'+dados);
      });
    });
  }

}
