import { EnderecoharasPage } from './../pages/enderecoharas/enderecoharas';
import { RegistroPage } from './../pages/registro/registro';
import { CadastrosHarasPage } from './../pages/cadastros-haras/cadastros-haras';
import { AnimalFotoComponent } from './../components/animal-foto/animal-foto';
import { HttpClientModule  } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, LoadingController } from 'ionic-angular';
import { Base64 } from '@ionic-native/base64';

import { TextMaskModule } from 'angular2-text-mask';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { DocumentViewer } from '@ionic-native/document-viewer';

import { LoginPage } from '../pages/login/login';
import { ConfiguracaoPage } from '../pages/configuracao/configuracao';
import { CadastrosPage } from './../pages/cadastros/cadastros';
import { SobrePage } from './../pages/sobre/sobre';
import { RelatoriosPage } from './../pages/relatorios/relatorios';
import { TarefasPage } from './../pages/tarefas/tarefas';
import { CasqueamentoPage } from '../pages/casqueamento/casqueamento';
import { AlimentacaoPage } from '../pages/alimentacao/alimentacao';
import { FuncionarioPage } from '../pages/funcionario/funcionario';
import { VeterinarioPage } from '../pages/veterinario/veterinario';
import { AnimalPage } from '../pages/animal/animal';
import { MedicamentoPage } from '../pages/medicamento/medicamento';
import { TreinamentoPage } from '../pages/treinamento/treinamento';
import { VacinaPage } from '../pages/vacina/vacina';
import { AlimentoPage } from './../pages/alimento/alimento';
import { RemedioPage } from './../pages/remedio/remedio';
import { ProprietarioPage } from './../pages/proprietario/proprietario';
import { ProprietariosProvider } from '../providers/proprietarios/proprietarios';
import { SearchProprietarioComponent } from '../components/search-proprietario/search-proprietario';
import { VeterinariosProvider } from '../providers/veterinarios/veterinarios';
import { AnimaisProvider } from '../providers/animais/animais';
import { EnderecoProvider } from '../providers/endereco/endereco';
import { ListAnimaisPage } from './../pages/list-animais/list-animais';
import { SearchVeterinarioComponent } from './../components/search-veterinario/search-veterinario';
import { SearchAnimalComponent } from './../components/search-animal/search-animal';

import { ImagePicker } from '@ionic-native/image-picker';
import { ImageResizer} from '@ionic-native/image-resizer';
import { Camera} from '@ionic-native/camera';
import { ImageSeletorConverterProvider } from '../providers/image-seletor-converter/image-seletor-converter';
import { LoginProvider } from '../providers/login/login';
import { AlimentoProvider } from '../providers/alimento/alimento';
import { RemedioProvider } from '../providers/remedio/remedio';

import { EnderecoComponent } from './../components/endereco/endereco';
import { SearchRemedioComponent } from './../components/search-remedio/search-remedio';
import { SearchAlimentoComponent } from './../components/search-alimento/search-alimento';
import { InfoAnimalComponent } from './../components/info-animal/info-animal';
import { AtividadesProvider } from '../providers/atividades/atividades';

import { HTTP } from '@ionic-native/http';
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { ColaboradorProvider } from '../providers/colaborador/colaborador';
import { HarasProvider } from '../providers/haras/haras';
import { GlobalvariablesProvider } from '../providers/globalvariables/globalvariables';
import { BrMaskerModule } from 'brmasker-ionic-3';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    CadastrosPage,
    TarefasPage,
    RelatoriosPage,
    SobrePage,
    ConfiguracaoPage,
    TreinamentoPage,
    VacinaPage,
    CasqueamentoPage,
    AlimentacaoPage,
    MedicamentoPage,
    FuncionarioPage,
    AnimalPage,
    VeterinarioPage,
    ProprietarioPage,
    RemedioPage,
    AlimentoPage,
    ListAnimaisPage,
    CadastrosHarasPage,
    RegistroPage,
    EnderecoharasPage,
    SearchProprietarioComponent,
    SearchAnimalComponent,
    SearchVeterinarioComponent,
    SearchAlimentoComponent,
    SearchRemedioComponent,
    InfoAnimalComponent,
    EnderecoComponent,
    AnimalFotoComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    TextMaskModule,
    HttpClientModule,
    BrMaskerModule
    //DocumentViewer 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    CadastrosPage,
    TarefasPage,
    RelatoriosPage,
    SobrePage,
    ConfiguracaoPage,
    TreinamentoPage,
    VacinaPage,
    CasqueamentoPage,
    AlimentacaoPage,
    MedicamentoPage,
    FuncionarioPage,
    AnimalPage,
    VeterinarioPage,
    ProprietarioPage,
    RemedioPage,
    AlimentoPage,
    ListAnimaisPage,
    CadastrosHarasPage,
    RegistroPage,
    EnderecoharasPage,    
    SearchAlimentoComponent,
    SearchAnimalComponent,
    SearchProprietarioComponent,
    SearchRemedioComponent,
    SearchVeterinarioComponent,
    AnimalFotoComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProprietariosProvider,
    VeterinariosProvider,
    AnimaisProvider,
    EnderecoProvider,
    Base64,
    ImagePicker,
    ImageResizer,
    Camera,
    LoadingController,
    ImageSeletorConverterProvider,
    LoginProvider,
    AlimentoProvider,
    RemedioProvider,
    EnderecoProvider,
    AtividadesProvider,
    DocumentViewer,
    HTTP,
    FileTransfer,
    File,
    AndroidPermissions,
    ColaboradorProvider,
    HarasProvider,
    GlobalvariablesProvider
  ]
})
export class AppModule {}