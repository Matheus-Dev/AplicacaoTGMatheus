import { EnderecoProvider } from './../../providers/endereco/endereco';
import { Veterinario } from './../../models/veterinario';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VeterinarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-veterinario',
  templateUrl: 'veterinario.html',
})
export class VeterinarioPage {

  veterinario: Veterinario;
  listaClasses: Array<string>;  
  siglasEstados: any;
  masks: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public enderecoService: EnderecoProvider) {
    this.listClasses();
    this.masks = {
      phoneNumber: ['(', /[1-9]/, /\d/, ')', /([1-9]{4})/ , '-', /\d/, /\d/, /\d/, /\d/]
    };
    this.veterinario = new Veterinario();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VeterinarioPage');
  }

  inicializarSiglas(){
    this.enderecoService.getSiglasEstados()
    .then(data => {
      this.siglasEstados = data;
    })
    .catch(e => {
      alert(e);
    });
  }

  listClasses(){
    this.listaClasses = [
      'VP','VS','ZP','ZS'
    ]
  }

}
