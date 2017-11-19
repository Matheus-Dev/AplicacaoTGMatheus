import { NgModule } from '@angular/core';
import { SearchAnimalComponent } from './search-animal/search-animal';
import { SearchProprietarioComponent } from './search-proprietario/search-proprietario';
import { SearchVeterinarioComponent } from './search-veterinario/search-veterinario';
import { EnderecoComponent } from './endereco/endereco';
import { InfoAnimalComponent } from './info-animal/info-animal';
import { InfoProprietarioComponent } from './info-proprietario/info-proprietario';
import { InfoVeterinarioComponent } from './info-veterinario/info-veterinario';
import { ImageSelectViewComponent } from './image-select-view/image-select-view';
@NgModule({
	declarations: [SearchAnimalComponent,
    SearchProprietarioComponent,
    SearchVeterinarioComponent,
    SearchAnimalComponent,
    SearchVeterinarioComponent,
    EnderecoComponent,
    InfoAnimalComponent,
    InfoProprietarioComponent,
    InfoVeterinarioComponent,
    ImageSelectViewComponent],
	imports: [],
	exports: [SearchAnimalComponent,
    SearchProprietarioComponent,
    SearchVeterinarioComponent,
    SearchAnimalComponent,
    SearchVeterinarioComponent,
    EnderecoComponent,
    InfoAnimalComponent,
    InfoProprietarioComponent,
    InfoVeterinarioComponent,
    ImageSelectViewComponent]
})
export class ComponentsModule {}
