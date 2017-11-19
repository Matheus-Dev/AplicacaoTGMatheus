import { ListAnimaisPage } from './../list-animais/list-animais';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { VeterinarioPage } from '../veterinario/veterinario';
//import { AnimalPage } from '../animal/animal';
import { FuncionarioPage } from './../funcionario/funcionario';
import { ProprietarioPage } from './../proprietario/proprietario';
import { AlimentoPage } from './../alimento/alimento';
import { RemedioPage } from './../remedio/remedio';

/**
 * Generated class for the CadastrosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastros',
  templateUrl: 'cadastros.html',
})
export class CadastrosPage {

  public cadastros : Array<{title: string, component : any, name: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cadastros = this.listCadastros();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrosPage');
  }

  listCadastros() : Array<{title: string, component: any, name : string}>{
    return [
      { title: 'Colaborador', component: FuncionarioPage, name: 'contacts' },
      { title: 'Animais', component: ListAnimaisPage, name: 'paw' },
      { title: 'Veterinário', component: VeterinarioPage, name: 'briefcase' },
      { title: 'Proprietário', component: ProprietarioPage, name: 'person' },
      { title: 'Alimento', component: AlimentoPage, name: 'nutrition' },
      { title: 'Remédio', component: RemedioPage, name: 'medkit' },
    ];
  }

  criarNovoCadastro(page){
    this.navCtrl.push(page)
  }

}
