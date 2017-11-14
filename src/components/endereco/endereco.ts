import { Component } from '@angular/core';

/**
 * Generated class for the EnderecoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'endereco',
  templateUrl: 'endereco.html'
})
export class EnderecoComponent {

  masks: any;

  constructor() {
    this.masks = {
      phoneNumber: ['(', /[1-9]/, /\d/, ')', /([1-9]{4})/ , '-', /\d/, /\d/, /\d/, /\d/],
      cep : [/\d/, /\d/, /\d/, /\d/, /\d/, '-' , /\d/, /\d/, /\d/]
    };
  }

}
