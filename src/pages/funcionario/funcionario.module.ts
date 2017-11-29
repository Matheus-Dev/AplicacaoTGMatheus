import { EnderecoComponent } from './../../components/endereco/endereco';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FuncionarioPage } from './funcionario';

import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  declarations: [
    FuncionarioPage,
    EnderecoComponent
  ],
  imports: [
    IonicPageModule.forChild(FuncionarioPage),
    TextMaskModule
  ],
})
export class FuncionarioPageModule {}
