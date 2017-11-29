import { Atividade } from './../../models/atividade';
//import { Animal } from './../../models/animal';
//import { AnimaisProvider } from './../../providers/animais/animais';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TreinamentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-treinamento',
  templateUrl: 'treinamento.html',
})
export class TreinamentoPage {

  atividade: Atividade;
  treinamento : {inicio: string, termino : string, tipo: string, observacao: string};
  treinamentos: Array<string> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
                
      this.atividade = new Atividade();
      this.treinamento = {inicio: '', termino : '', tipo : '', observacao: ''};
      this.inicializarTreinamentos(); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TreinamentoPage');
  }

  inicializarTreinamentos(){
    this.treinamentos = [
      'MARCHA','CAVALGADA'
    ]
  }

  mostrarDados(){
    let dataCricao = new Date(this.formatarData());
    //hora.toISOString();
    alert(dataCricao.toISOString());
    //alert(hora);
    alert(this.treinamento.tipo);
    alert(this.atividade.animal);

  }

  recuperarAnimal(animal){
    this.atividade.animal = animal._id;
  }

  formatarData() : string{
    let data = new Date();
    let dateNow = data.toISOString();
    alert("valor antes"+dateNow);
    dateNow = dateNow.replace("Z", "-02:00");
    alert("valor depois"+dateNow);
    return dateNow;
  }

}
