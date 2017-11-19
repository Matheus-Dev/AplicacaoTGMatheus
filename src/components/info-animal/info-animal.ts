import { AnimaisProvider } from './../../providers/animais/animais';
import { Animal } from './../../models/animal';
import { Component, Input } from '@angular/core';



/**
 * Generated class for the InfoAnimalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'info-animal',
  templateUrl: 'info-animal.html'
})
export class InfoAnimalComponent {

  @Input() animal : Animal = new Animal();

  constructor(public animaisProvider: AnimaisProvider) {   
  }

  
}
