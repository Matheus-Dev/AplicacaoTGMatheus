import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MedicamentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-medicamento',
  templateUrl: 'medicamento.html',
})
export class MedicamentoPage {

  medicamento : {horaAplicacao: Date};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.inicializar();
  }

  inicializar() {
    this.medicamento = {horaAplicacao : new Date()}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicamentoPage');
  }

}
