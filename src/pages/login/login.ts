import { RegistroPage } from './../registro/registro';
import { LoginProvider } from './../../providers/login/login';
import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { CadastrosHarasPage } from "../cadastros-haras/cadastros-haras";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  message : any;
  colaboradorLogado : {codigo: string, login: string, senha: string};

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public loginProvider: LoginProvider) {

            this.colaboradorLogado = {
              codigo : '',
              login: '',
              senha: ''
            }
  }

  verificarDisponibilidadeAPI(){
    this.loginProvider.verificarDisponibilidadeAPI()
    .then(data => {
      this.message = data;
      alert("Tela Login"+this.message.title);
    })
    .catch(e =>{
      alert(e);
    });
  }

  ionViewDidLoad() {
  }

  ionViewWillEnter(){
    //this.verificarDisponibilidadeAPI();
  }

  realizarLogin(){
    let dados : any;
    this.loginProvider.realizarLogin(this.colaboradorLogado)
    .then(data => {
      dados = data;
      //alert("Aviso: "+dados.message);
      if(dados.status == 200){
        this.navCtrl.setRoot(HomePage, {
          colaboradorLogado : dados.data
        });
      }
    })
    .catch(e =>{
      alert(e);
    });
  }

  openPage() {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
  }

  abrirPaginaCadastro(){
    this.navCtrl.push(RegistroPage);
  }

}
