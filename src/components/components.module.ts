import { NgModule } from '@angular/core';
import { SearchAnimalComponent } from './search-animal/search-animal';
import { SearchProprietarioComponent } from './search-proprietario/search-proprietario';
import { SearchVeterinarioComponent } from './search-veterinario/search-veterinario';
import { EnderecoComponent } from './endereco/endereco';
import { InfoAnimalComponent } from './info-animal/info-animal';
import { InfoProprietarioComponent } from './info-proprietario/info-proprietario';
import { InfoVeterinarioComponent } from './info-veterinario/info-veterinario';
import { SearchAlimentoComponent } from './search-alimento/search-alimento';
import { SearchRemedioComponent } from './search-remedio/search-remedio';
import { AnimalFotoComponent } from './animal-foto/animal-foto';

@NgModule({
	declarations: [
        SearchAnimalComponent,
        SearchProprietarioComponent,
        SearchVeterinarioComponent,
        SearchAnimalComponent,
        SearchVeterinarioComponent,
        EnderecoComponent,
        InfoAnimalComponent,
        InfoProprietarioComponent,
        InfoVeterinarioComponent,
        SearchAlimentoComponent,
        SearchRemedioComponent,
        AnimalFotoComponent,
    ],
	imports: [],
	exports: [
        SearchAnimalComponent,
        SearchProprietarioComponent,
        SearchVeterinarioComponent,
        SearchAnimalComponent,
        SearchVeterinarioComponent,
        EnderecoComponent,
        InfoAnimalComponent,
        InfoProprietarioComponent,
        InfoVeterinarioComponent,
        SearchAlimentoComponent,
        SearchRemedioComponent,
        AnimalFotoComponent
    ]
})

export class ComponentsModule {}