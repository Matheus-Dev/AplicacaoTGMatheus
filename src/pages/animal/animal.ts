import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
            
      this.animal = new Animal();
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnimalPage');
  }

  checkFocus (){
  }

  novaImagem(imagem){
    this.animal.image = imagem;
  }

  salvarAnimal(){
    
  }

  cancelar(){
    this.navCtrl.pop();
  }

}
