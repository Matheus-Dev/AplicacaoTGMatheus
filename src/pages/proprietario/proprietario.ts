import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProprietarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-proprietario',
  templateUrl: 'proprietario.html',
})
export class ProprietarioPage {

  siglaEstado : string = '';
  estados : Array<{sigla : string}>;

  masks: any;
  
  phoneNumber: any = "";
  cep : any = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.estados = this.listEstados();
    this.masks = {
      phoneNumber: ['(', /[1-9]/, /\d/, ')', /([1-9]{4})/ , '-', /\d/, /\d/, /\d/, /\d/],
      cep : [/\d/, /\d/, /\d/, /\d/, /\d/, '-' , /\d/, /\d/, /\d/]
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProprietarioPage');
  }

  listEstados () : Array<{sigla : string}>{
    
    return [
      { sigla : 'AC' },
      { sigla : 'AM' },
    ]
  }

}
