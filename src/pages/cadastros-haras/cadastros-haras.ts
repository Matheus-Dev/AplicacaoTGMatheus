import { LoginPage } from './../login/login';
import { Haras } from './../../models/haras';
import { HarasProvider } from './../../providers/haras/haras';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CadastrosHarasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastros-haras',
  templateUrl: 'cadastros-haras.html',
})
export class CadastrosHarasPage {

  dadosHaras : Haras;
  proprietario : {nome: string, cpf: string, telefone: string, email: string};

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public harasProvider: HarasProvider) {
                this.inicialzarProprieatrio();
  }

  inicialzarProprieatrio(){
    this.dadosHaras = new Haras();
    this.proprietario = {
      nome : '',
      cpf : '',
      telefone : '',
      email : ''
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrosHarasPage');
  }

  realizarPreCadastro(){
    this.dadosHaras.proprietario = this.proprietario;
    let dados : any;
    let error = '';
    this.harasProvider.salvarHaras(this.dadosHaras)
    .then(data => {
      dados = data;
      alert(dados.message);
      if(dados.status == 200){
        this.navCtrl.setRoot(LoginPage);
      }
      
    })
    .catch(err => {
      for (let key in err){
        let attrName = key;
        var attrValue = err[key];
        error = error + ' ' + attrName + ' ' + attrValue + '\n';
      } 
      alert(error);
    });
  }

  cancelar(){
    this.navCtrl.pop();
  }

  gerarObjectHaras(){
    return {
      codigo: this.dadosHaras.codigo,
      razaoSocial: this.dadosHaras.razaoSocial,
      inscricaoEstadual:  this.dadosHaras.inscricaoEstadual,
      proprietario: this.proprietario
    }

  }

}
