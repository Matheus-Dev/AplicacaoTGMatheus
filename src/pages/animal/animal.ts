import { ProprietariosProvider } from './../../providers/proprietarios/proprietarios';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { VeterinariosProvider } from './../../providers/veterinarios/veterinarios';
import { Animal } from './../../models/animal';
import { AnimaisProvider } from '../../providers/animais/animais';

/**
 * Generated class for the AnimalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-animal',
  templateUrl: 'animal.html',
})
export class AnimalPage {

  animal: Animal;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public animalProvider: AnimaisProvider) {
            
      this.animal = this.animalProvider.inicializarAnimal();
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnimalPage');
  }

  checkFocus (){
  }

}
