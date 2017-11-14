import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RemedioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-remedio',
  templateUrl: 'remedio.html',
})
export class RemedioPage {

  dataValidade : string = "";
  tipoRemedio : string = "";

  tiposRemedios : Array<{tipo : string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.tiposRemedios = this.listTiposRemedios();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RemedioPage');
  }

  listTiposRemedios () : Array<{tipo: string}>{
    
    return [
      { tipo : 'Pilula' },
      { tipo : 'Pomada' },
    ]
  }

}
