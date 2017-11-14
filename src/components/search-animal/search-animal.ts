import { AnimaisProvider } from './../../providers/animais/animais';
import { Animal } from './../../models/animal';
import { Component } from '@angular/core';

/**
 * Generated class for the SearchAnimalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'search-animal',
  templateUrl: 'search-animal.html'
})
export class SearchAnimalComponent {

  animais : any;
  animalSelecionado: Animal;
  filtroAnimal: string = '';

  animaisFiltrado : Array<Animal> = [];

  constructor(public animalService: AnimaisProvider) {
    this.getAnimaisService();
    this.animalSelecionado = this.animalService.inicializarAnimal();
  }

  getAnimaisService() {
    this.animalService.getAnimais()
    .then(data => {
      this.animais = data;
    });
  }

  getAnimais(ev) {
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

  selecionarAnimal(animal) {
    this.animalSelecionado = animal;
    this.filtroAnimal = '';
    this.animaisFiltrado = [];
  }

}
