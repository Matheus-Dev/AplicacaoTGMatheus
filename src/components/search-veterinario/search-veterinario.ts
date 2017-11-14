import { Component } from '@angular/core';
import { Veterinario } from '../../models/veterinario';
import { VeterinariosProvider } from '../../providers/veterinarios/veterinarios';

/**
 * Generated class for the SearchVeterinarioComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'search-veterinario',
  templateUrl: 'search-veterinario.html'
})
export class SearchVeterinarioComponent {

  veterinarios : any;
  veterinarioSelecionado: Veterinario;
  filtroVeterinario: string = '';

  veterinariosFiltrado : Array<Veterinario> = [];

  constructor(public veterinarioService : VeterinariosProvider) {
    this.getVeterinariosService();
    this.veterinarioSelecionado = this.veterinarioService.inicializarVeterinario();
  }

  getVeterinariosService() {
    this.veterinarioService.getVeterinarios()
    .then(data => {
      this.veterinarios = data;
    });
  }

  getVeterinarios(ev) {
    // set val to the value of the searchbar
    let val = ev.target.value;
    console.log(val);
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.veterinariosFiltrado = this.veterinarios.filter((veterinario) => {
        return (veterinario.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }else{
      this.veterinariosFiltrado = [];
    }

  }

  selecionarVeterinario (veterinario) {
    this.veterinarioSelecionado = veterinario;
    this.filtroVeterinario = '';
    this.veterinariosFiltrado = [];
  }

}
