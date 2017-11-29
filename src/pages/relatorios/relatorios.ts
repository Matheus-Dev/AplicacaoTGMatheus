import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RelatoriosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-relatorios',
  templateUrl: 'relatorios.html',
})
export class RelatoriosPage {

  filtrosRelatorio: {tipo: string, inicio:Date, termino:Date};

  filtros: Array<string>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.inicializarFiltros();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RelatoriosPage');
  }

  inicializarFiltros(){
    this.filtrosRelatorio = {
      tipo: '',
      inicio: new Date(),
      termino: new Date()
    }
    this.filtros = [
      'ANIMAL','COLABORADOR','PROPRIETARIO'
    ]
  }

  mostrarData(){
    alert(this.filtrosRelatorio.inicio);
  }

}
