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

  animais: Array<{nome : string}>;
  animalSelecionado : {nome : string};
  filtroAnimal : string = '';
  animaisFiltrado : Array<{nome : string}>;
  treinamento : {inicio: string, termino : string};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.animais = this.inicializarListaAnimais();
      this.animaisFiltrado = [];
      this.animalSelecionado = {nome : ''};
      this.treinamento = {inicio: '', termino : ''}; 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TreinamentoPage');
  }

  getItems(ev) {
    // set val to the value of the searchbar
    let val = ev.target.value;
    console.log(val);
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.animaisFiltrado = this.animais.filter((animal) => {
        return (animal.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }else{
      this.animaisFiltrado = [];
    }

  }

  inicializarListaAnimais () : Array<{nome: string}> {
    return [
      {nome : "Cavalo Tenso"},
      {nome : "Pé de Pano"}
    ]
  }

  selecionarAnimal (animal) {
    this.animalSelecionado = animal;
    this.filtroAnimal = '';
    this.animaisFiltrado = [];
  }

}
