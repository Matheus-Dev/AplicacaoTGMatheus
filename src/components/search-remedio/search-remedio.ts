import { RemedioProvider } from './../../providers/remedio/remedio';
import { Remedio } from './../../models/remedio';
import { Component } from '@angular/core';

/**
 * Generated class for the SearchRemedioComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'search-remedio',
  templateUrl: 'search-remedio.html'
})
export class SearchRemedioComponent {

  remedios : any;
  remedioSelecionado: Remedio;
  filtroRemedio: string = '';

  remediosFiltrado : Array<Remedio> = [];

  constructor(public remedioService: RemedioProvider) {
    console.log('Hello SearchRemedioComponent Component');
    this.getRemedioService();
    this.remedioSelecionado = new Remedio();
  }

  getRemedioService() {
    this.remedioService.getRemedios()
    .then(data => {
      //alert(data);
      this.remedios = data;
    })
    .catch(e => {
      alert(e);
    });
  }

  getRemedios(ev) {
    // set val to the value of the searchbar
    let val = ev.target.value;
    console.log(val);
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.remediosFiltrado = this.remedios.filter((remedio) => {
        return (remedio.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }else{
      this.remediosFiltrado = [];
    }

  }

  selecionarRemedio(remedio) {
    this.remedioSelecionado = remedio;
    this.filtroRemedio = '';
    this.remediosFiltrado = [];
  }
}
