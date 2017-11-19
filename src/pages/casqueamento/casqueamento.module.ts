import { SearchAnimalComponent } from './../../components/search-animal/search-animal';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CasqueamentoPage } from './casqueamento';

@NgModule({
  declarations: [
    CasqueamentoPage,
    SearchAnimalComponent
  ],
  imports: [
    IonicPageModule.forChild(CasqueamentoPage),
  ],
})
export class CasqueamentoPageModule {}
