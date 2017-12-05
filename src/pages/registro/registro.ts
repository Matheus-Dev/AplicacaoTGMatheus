import { CadastrosHarasPage } from './../cadastros-haras/cadastros-haras';
import { EnderecoharasPage } from './../enderecoharas/enderecoharas';
import { HarasProvider } from './../../providers/haras/haras';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  chaveHaras : string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public harasProvider: HarasProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  validarHaras(){
    let dados : any;

    this.harasProvider.validarHaras(this.chaveHaras)
    .then(data => {
      dados = data;
      alert(dados.message);
      if(dados.status == 200){
        this.navCtrl.push(EnderecoharasPage, {haras : dados.data});
      }
    })
    .catch(err => {
    });
  }

  abrirTelaPreRegistro(){
    this.navCtrl.push(CadastrosHarasPage);
  }

  

}
