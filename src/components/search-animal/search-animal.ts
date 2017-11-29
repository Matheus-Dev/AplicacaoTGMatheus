import { AnimaisProvider } from './../../providers/animais/animais';
//import { Animal } from './../../models/animal';
import { Component, Output, EventEmitter } from '@angular/core';

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

  @Output() emissorAnimal = new EventEmitter();

  animais : any;
  animalSelecionado: any;
  filtroAnimal: string = '';

  animaisFiltrado : any = '';

  constructor(public animalService: AnimaisProvider) {
    this.getAnimaisService();
    this.animalSelecionado = '';
  }

  ionViewWillEnter(){
    
  }

  getAnimaisService() {
    this.animalService.getAnimais()
    .then(data => {
      //alert(data);
      this.animais = data;
    })
    .catch(e => {
      alert(e);
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
    this.emissorAnimal.emit(animal);
  }

  emitirAnimal(){
    this.emissorAnimal.emit({id : this.animalSelecionado});
  }

}
