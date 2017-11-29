import { Atividade } from './../../models/atividade';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AlimentacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alimentacao',
  templateUrl: 'alimentacao.html',
})
export class AlimentacaoPage {

  atividade: Atividade;
  dadosAtividade: {alimento: any, horario: Date, qtde: string};

  hora: any = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.atividade = new Atividade();
    this.dadosAtividade = {
      alimento:'', horario: new Date(), qtde:''
    }
    this.atividade.detalhesAtividade = this.dadosAtividade;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlimentacaoPage');
  }

  recuperarAnimal(animalId){
    this.atividade.animal = animalId.id;
    alert(animalId);
  }

  mostrarAnimal(){
    alert(this.atividade.animal);
  }

}
