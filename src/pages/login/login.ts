import { LoginProvider } from './../../providers/login/login';
import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';

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
  colaboradorLogado : any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public loginProvider: LoginProvider) {
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

  goPageHome() {
    this.colaboradorLogado.nome = 'Matheus Augusto';
    this.navCtrl.setRoot(HomePage, {
      colaboradorLogado : this.colaboradorLogado
    });
    //this.navParams.get('this.colaboradorLogado');
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    
  }

}
