import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { CadastrosPage } from '../pages/cadastros/cadastros';
import { RelatoriosPage } from '../pages/relatorios/relatorios';
import { TarefasPage } from './../pages/tarefas/tarefas';
import { ConfiguracaoPage } from '../pages/configuracao/configuracao';
import { SobrePage } from '../pages/sobre/sobre';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = this.listPages();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  listPages() : Array<{title: string, component: any}>{
    return [
      { title: 'Home', component: HomePage },
      { title: 'Cadastros', component: CadastrosPage },
      { title: 'Tarefas', component: TarefasPage },
      { title: 'Relatorios', component: RelatoriosPage },  
      { title: 'Sobre', component: SobrePage },
      { title: 'Configurações', component: ConfiguracaoPage },    
    ];
  }
}
