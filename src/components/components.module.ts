import { NgModule } from '@angular/core';
import { SearchAnimalComponent } from './search-animal/search-animal';
import { SearchProprietarioComponent } from './search-proprietario/search-proprietario';
import { SearchVeterinarioComponent } from './search-veterinario/search-veterinario';
import { EnderecoComponent } from './endereco/endereco';
@NgModule({
	declarations: [SearchAnimalComponent,
    SearchProprietarioComponent,
    SearchVeterinarioComponent,
    SearchAnimalComponent,
    SearchVeterinarioComponent,
    EnderecoComponent],
	imports: [],
	exports: [SearchAnimalComponent,
    SearchProprietarioComponent,
    SearchVeterinarioComponent,
    SearchAnimalComponent,
    SearchVeterinarioComponent,
    EnderecoComponent]
})
export class ComponentsModule {}
