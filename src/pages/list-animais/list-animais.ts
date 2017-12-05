import { AnimaisProvider } from './../../providers/animais/animais';
import { AnimalPage } from './../animal/animal';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListAnimaisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-animais',
  templateUrl: 'list-animais.html',
})
export class ListAnimaisPage {

  component : any = AnimalPage;

  animais : any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public animaisProvider : AnimaisProvider ) {
          
          this.inicializarListaAnimais();
  }

  inicializarListaAnimais(){
    this.animaisProvider.getAnimaisAtivos(this.navParams.get('colaboradorLogado._id'))
    .then(data => {
      this.animais = data;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListAnimaisPage');
  }

  adicionarAnimal(){
    this.navCtrl.push(this.component);
  }

}
