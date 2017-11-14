import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AlimentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alimento',
  templateUrl: 'alimento.html',
})
export class AlimentoPage {

  unidade : string = "";

  dataValidade : string = "";

  unidades : Array<{sigla : string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.unidades = this.listUnidades();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlimentoPage');
  }

  listUnidades () : Array<{sigla : string}>{
    return [
      { sigla : 'KG' },
      { sigla : 'CX' },
    ]
  }

}
