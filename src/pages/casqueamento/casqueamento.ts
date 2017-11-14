import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CasqueamentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-casqueamento',
  templateUrl: 'casqueamento.html',
})
export class CasqueamentoPage {

  public animais: Array<{nome : string}> = [];
  public animalSelecionado : {nome : string};
  public filtroAnimal : string = '';
  public animaisFiltrado : Array<{nome : string}> = [];
  public tiposFerradura : Array<{nome : string}> = [];
  public tipoFerradura : string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.animais = this.inicializarListaAnimais();
    this.animaisFiltrado = [];
    this.animalSelecionado = {nome : ''};
    this.tiposFerradura = this.inicializarListaFerradura();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CasqueamentoPage');
  }

  public getItems(ev) {
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

  public inicializarListaAnimais () : Array<{nome: string}> {
    return [
      {nome : "Cavalo Tenso"},
      {nome : "Pé de Pano"}
    ]
  }

  public inicializarListaFerradura () : Array<{nome: string}> {
    return [
      {nome : "Potro PSI"},
      {nome : "Treinamento"},
      {nome : "Inglesa de corrida - Anterior"},
      {nome : "Inglesa de corrida - Posterior"},
      {nome : "Americana de corrida"},
      {nome : "Alumínio"}
    ]
  }

  public selecionarAnimal (animal) {
    this.animalSelecionado = animal;
    this.filtroAnimal = '';
    this.animaisFiltrado = [];
  }

}
