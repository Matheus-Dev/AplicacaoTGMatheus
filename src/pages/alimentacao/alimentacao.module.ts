import { SearchAlimentoComponent } from './../../components/search-alimento/search-alimento';
import { SearchAnimalComponent } from './../../components/search-animal/search-animal';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlimentacaoPage } from './alimentacao';

@NgModule({
  declarations: [
    AlimentacaoPage,
    SearchAnimalComponent,
    SearchAlimentoComponent
  ],
  imports: [
    IonicPageModule.forChild(AlimentacaoPage),
  ],
})
export class AlimentacaoPageModule {}
