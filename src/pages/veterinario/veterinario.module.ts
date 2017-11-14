import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VeterinarioPage } from './veterinario';

import { TextMaskModule } from 'angular2-text-mask';


@NgModule({
  declarations: [
    VeterinarioPage,
  ],
  imports: [
    IonicPageModule.forChild(VeterinarioPage),
    TextMaskModule
  ],
})
export class VeterinarioPageModule {}
