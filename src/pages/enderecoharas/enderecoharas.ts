import { HarasProvider } from './../../providers/haras/haras';
import { Component, Output, EventEmitter } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EnderecoharasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-enderecoharas',
  templateUrl: 'enderecoharas.html',
})
export class EnderecoharasPage {

  endereco : any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public harasProvider: HarasProvider) {
            
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnderecoharasPage');
  }

  receberEndereco(endereco){
    this.endereco = endereco;
  }

  concluirCadastroHaras(){
    let dados = this.navParams.get('haras');
    dados.endereco = this.endereco;
    let info : any;
   this.harasProvider.atualizarAtualizar(dados).then(sucess => {
     info = sucess;
    alert(info.message);
   })
   .catch(err =>{

   }) 
  }

}
