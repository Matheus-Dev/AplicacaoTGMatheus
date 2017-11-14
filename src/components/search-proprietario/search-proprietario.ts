import { Component } from '@angular/core';

import { ProprietariosProvider } from './../../providers/proprietarios/proprietarios';
import { Proprietario } from '../../models/proprietario';
/**
 * Generated class for the SearchProprietarioComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'search-proprietario',
  templateUrl: 'search-proprietario.html'
})
export class SearchProprietarioComponent {

  //proprietarios: Array<Proprietario>;
  proprietarios : any;
  proprietarioSelecionado: Proprietario;
  filtroProprietario: string = '';

  proprietariosFiltrado : Array<Proprietario> = [];

  constructor(public proprietarioService: ProprietariosProvider) {
    this.getProprietariosService();
    this.proprietarioSelecionado = this.proprietarioService.inicializarProprietario();
  }

  getProprietariosService() {
    this.proprietarioService.getProprietarios()
    .then(data => {
      this.proprietarios = data;
      console.log(this.proprietarios);
    });
  }

  getProprietarios(ev) {
    // set val to the value of the searchbar
    let val = ev.target.value;
    console.log(val);
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.proprietariosFiltrado = this.proprietarios.filter((proprietario) => {
        return (proprietario.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }else{
      this.proprietariosFiltrado = [];
    }

  }

  selecionarProprietario (proprietario) {
    this.proprietarioSelecionado = proprietario;
    this.filtroProprietario = '';
    this.proprietariosFiltrado = [];
  }

}
