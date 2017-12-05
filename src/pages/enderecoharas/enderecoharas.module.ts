import { EnderecoComponent } from './../../components/endereco/endereco';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnderecoharasPage } from './enderecoharas';

@NgModule({
  declarations: [
    EnderecoharasPage,
    EnderecoComponent
  ],
  imports: [
    IonicPageModule.forChild(EnderecoharasPage),
  ],
})
export class EnderecoharasPageModule {}
