import { SearchAnimalComponent } from './../../components/search-animal/search-animal';
import { AnimaisProvider } from './../../providers/animais/animais';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TreinamentoPage } from './treinamento';

@NgModule({
  declarations: [
    TreinamentoPage,
    SearchAnimalComponent
  ],
  imports: [
    IonicPageModule.forChild(TreinamentoPage),
  ],
  providers: [
    AnimaisProvider
  ]
})
export class TreinamentoPageModule {}
