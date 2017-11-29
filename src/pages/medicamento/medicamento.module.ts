import { SearchAnimalComponent } from './../../components/search-animal/search-animal';
import { RemedioProvider } from './../../providers/remedio/remedio';
import { AnimaisProvider } from './../../providers/animais/animais';
import { SearchRemedioComponent } from './../../components/search-remedio/search-remedio';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedicamentoPage } from './medicamento';

@NgModule({
  declarations: [
    MedicamentoPage,
    SearchAnimalComponent,
    SearchRemedioComponent
  ],
  imports: [
    IonicPageModule.forChild(MedicamentoPage),
  ],
  providers: [
    AnimaisProvider,
    RemedioProvider
  ]
})
export class MedicamentoPageModule {}
