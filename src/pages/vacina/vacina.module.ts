import { AnimaisProvider } from './../../providers/animais/animais';
import { SearchAnimalComponent } from './../../components/search-animal/search-animal';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VacinaPage } from './vacina';

@NgModule({
  declarations: [
    VacinaPage,
    SearchAnimalComponent
  ],
  imports: [
    IonicPageModule.forChild(VacinaPage),
  ],
  providers: [
    AnimaisProvider
  ]
})
export class VacinaPageModule {}
