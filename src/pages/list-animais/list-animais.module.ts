import { VeterinariosProvider } from './../../providers/veterinarios/veterinarios';
import { AnimaisProvider } from './../../providers/animais/animais';
import { InfoAnimalComponent } from './../../components/info-animal/info-animal';
import { AnimalPage } from './../animal/animal';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListAnimaisPage } from './list-animais';
import { ProprietariosProvider } from '../../providers/proprietarios/proprietarios';

@NgModule({
  declarations: [
    ListAnimaisPage,
    AnimalPage,
    InfoAnimalComponent
  ],
  imports: [
    IonicPageModule.forChild(ListAnimaisPage),
  ],
  providers: [
    AnimaisProvider,
    ProprietariosProvider,
    VeterinariosProvider
  ]
})
export class ListAnimaisPageModule {}
