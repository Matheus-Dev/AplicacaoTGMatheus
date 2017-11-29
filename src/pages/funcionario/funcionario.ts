import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the FuncionarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-funcionario',
  templateUrl: 'funcionario.html',
})
export class FuncionarioPage {

  siglaEstado : string = '';
  estados : Array<{sigla : string}>;

  masks: any;
  
  phoneNumber: any = "";
  cep : any = "";

  funcao : string = "";

  funcoes : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.estados = this.listEstados();
    this.masks = {
      phoneNumber: ['(', /[1-9]/, /\d/, ')', /([1-9]{4})/ , '-', /\d/, /\d/, /\d/, /\d/],
      cep : [/\d/, /\d/, /\d/, /\d/, /\d/, '-' , /\d/, /\d/, /\d/]
    };
    this.funcoes = ['ADMISTRADOR','CAPATAZ','PEÃO'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FuncionarioPage');
  }

  listEstados () : Array<{sigla : string}>{

    return [
      {
        sigla : 'AC'
      },{
        sigla : 'AM'
      },


    ]

  }

}
