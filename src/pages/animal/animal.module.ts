import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnimalPage } from './animal';

import { ProprietariosProvider } from './../../providers/proprietarios/proprietarios';
import { VeterinariosProvider } from './../../providers/veterinarios/veterinarios';

import { SearchProprietarioComponent } from './../../components/search-proprietario/search-proprietario';
import { SearchVeterinarioComponent } from './../../components/search-veterinario/search-veterinario';

@NgModule({
  declarations: [
    AnimalPage,
    SearchProprietarioComponent,
    SearchVeterinarioComponent
  ],
  imports: [
    IonicPageModule.forChild(AnimalPage),
  ],
  providers:[
    ProprietariosProvider,
    VeterinariosProvider
  ]
})
export class AnimalPageModule {}
