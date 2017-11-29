import { AnimalFotoComponent } from './../../components/animal-foto/animal-foto';
import { SearchVeterinarioComponent } from './../../components/search-veterinario/search-veterinario';
import { SearchProprietarioComponent } from './../../components/search-proprietario/search-proprietario';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnimalPage } from './animal';

@NgModule({
  declarations: [
    AnimalPage,
    SearchProprietarioComponent,
    SearchVeterinarioComponent,
    AnimalFotoComponent
  ],
  imports: [
    IonicPageModule.forChild(AnimalPage),
  ],
  providers:[
  ]
})
export class AnimalPageModule {}
