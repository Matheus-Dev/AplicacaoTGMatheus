import { ImageSeletorConverterProvider } from './../../providers/image-seletor-converter/image-seletor-converter';
import { ImageSelectViewComponent } from './../../components/image-select-view/image-select-view';
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
    SearchVeterinarioComponent,
    ImageSelectViewComponent
  ],
  imports: [
    IonicPageModule.forChild(AnimalPage),
  ],
  providers:[
    ProprietariosProvider,
    VeterinariosProvider,
    ImageSeletorConverterProvider
  ]
})
export class AnimalPageModule {}
