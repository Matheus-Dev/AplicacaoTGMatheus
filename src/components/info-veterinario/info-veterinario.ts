import { Component } from '@angular/core';

/**
 * Generated class for the InfoVeterinarioComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'info-veterinario',
  templateUrl: 'info-veterinario.html'
})
export class InfoVeterinarioComponent {

  text: string;

  constructor() {
    console.log('Hello InfoVeterinarioComponent Component');
    this.text = 'Hello World';
  }

}
