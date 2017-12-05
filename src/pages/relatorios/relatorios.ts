import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';
import { AtividadesProvider } from './../../providers/atividades/atividades';
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

  filtrosRelatorio: {tipo: string, nome: string, inicio:string, termino:string};
  dataFiltro: {inicio: Date, termino: Date};
  tiposRelatorio = ['ANIMAL','COLABORADOR','PROPRIETARIO'];
  options: DocumentViewerOptions = {
    title: 'My PDF'
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public http: AtividadesProvider, private document: DocumentViewer) {
        this.inicializarFiltros();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RelatoriosPage');
  }

  inicializarFiltros(){
    this.filtrosRelatorio = {
      tipo: '',
      nome: '',
      inicio: '',
      termino: ''
    }

    this.dataFiltro = {
      inicio: new Date(),
      termino: new Date()
    }
  }

  gerarRelatorio(){

    let stringDataInicio = this.dataFiltro.inicio.toString();
    let stringDataTermino = this.dataFiltro.termino.toString();

    this.filtrosRelatorio.inicio = stringDataInicio+'T22:00:00.000+0200';
    this.filtrosRelatorio.termino = stringDataTermino+'T21:59:59.000+0200';

    alert(this.filtrosRelatorio);

    //alert('Data de Inicio'+new Date(stringDataInicio));
    //alert('Data de Termino'+new Date(stringDataTermino));
    //this.http.getRelatorioAnimal();
  }

}
