import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TreinamentoPage } from '../treinamento/treinamento';

import { MedicamentoPage } from './../medicamento/medicamento';
import { AlimentacaoPage } from './../alimentacao/alimentacao';
import { CasqueamentoPage } from '../casqueamento/casqueamento';
import { VacinaPage } from '../vacina/vacina';


/**
 * Generated class for the TarefasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tarefas',
  templateUrl: 'tarefas.html',
})
export class TarefasPage {

  tarefas : Array<{title: string, component : any, name : string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.tarefas = this.listTasks();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TarefasPage');
  }

  listTasks() : Array<{title: string, component: any, name : string}>{
    return [
      { title: 'Treinamento', component: TreinamentoPage, name : 'medal' },
      { title: 'Vacina', component: VacinaPage, name : 'heart' },
      { title: 'Casqueamento', component: CasqueamentoPage, name : 'hammer' },
      { title: 'Alimentação', component: AlimentacaoPage, name : 'nutrition' },  
      { title: 'Medicamento', component: MedicamentoPage, name : 'medkit' }
    ];
  }

  criarNovaTarefa(page){
    this.navCtrl.push(page);
  }

}
