import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the GlobalvariablesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalvariablesProvider {

  urlAPI : string = "http://192.168.0.106:3000";

  constructor(public http: HttpClient) {
    console.log('Hello GlobalvariablesProvider Provider');
  }

}
