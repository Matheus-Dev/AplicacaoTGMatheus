import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usuarioLogado: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
     this.verificarUsuarioLogado();
    //alert(navParams.get('colaboradorLogado').nome);
  }

  verificarUsuarioLogado(){
    if(this.navParams.get('colaboradorLogado') != null){
      this.usuarioLogado = this.navParams.get('colaboradorLogado');
    }else{
      this.usuarioLogado = {
        nome:'Usuario'
      }
    }
  }

}
