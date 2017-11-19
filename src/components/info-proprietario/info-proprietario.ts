import { Component } from '@angular/core';

/**
 * Generated class for the InfoProprietarioComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'info-proprietario',
  templateUrl: 'info-proprietario.html'
})
export class InfoProprietarioComponent {

  text: string;

  constructor() {
    console.log('Hello InfoProprietarioComponent Component');
    this.text = 'Hello World';
  }

}
