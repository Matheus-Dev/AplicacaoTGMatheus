import { NavParams } from 'ionic-angular';
import { AlimentoProvider } from './../../providers/alimento/alimento';
import { Alimento } from './../../models/alimento';
import { Component } from '@angular/core';

/**
 * Generated class for the SearchAlimentoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'search-alimento',
  templateUrl: 'search-alimento.html'
})
export class SearchAlimentoComponent {

  alimentos : any;
  alimentoSelecionado: Alimento;
  filtroAlimento: string = '';

  alimentosFiltrado : Array<Alimento> = [];

  constructor(public alimentoService: AlimentoProvider) {
    console.log('Hello SearchAlimentoComponent Component');
    this.getAlimentoService();
    this.alimentoSelecionado = new Alimento();
  }

  getAlimentoService() {
    let id = '1';
    this.alimentoService.getAlimentosValidos(id)
    .then(data => {
      //alert(data);
      this.alimentos = data;
    })
    .catch(e => {
      alert(e);
    });
  }

  getAlimentos(ev) {
    // set val to the value of the searchbar
    let val = ev.target.value;
    console.log(val);
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.alimentosFiltrado = this.alimentos.filter((alimento) => {
        return (alimento.marca.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }else{
      this.alimentosFiltrado = [];
    }

  }

  selecionarAlimento(alimento) {
    this.alimentoSelecionado = alimento;
    this.filtroAlimento = '';
    this.alimentosFiltrado = [];
  }

}
