import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProprietarioPage } from './proprietario';

import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  declarations: [
    ProprietarioPage,
  ],
  imports: [
    IonicPageModule.forChild(ProprietarioPage),
    TextMaskModule
  ],
})
export class ProprietarioPageModule {}
