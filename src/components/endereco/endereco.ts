import { Endereco } from './../../models/endereco';
import { EnderecoProvider } from './../../providers/endereco/endereco';
import { Component } from '@angular/core';

/**
 * Generated class for the EnderecoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'endereco',
  templateUrl: 'endereco.html'
})
export class EnderecoComponent {

  masks: any;
  siglasEstados : any;
  endereco : Endereco;

  constructor(public enderecoService : EnderecoProvider) {
    this.endereco = new Endereco();
    this.inicializarSiglas();
    this.inicializarMascaras();
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

  inicializarMascaras(){
    this.masks = {
      phoneNumber: ['(',/[1-9]/,/\d/,')',/([1-9]{4})/,'-',/\d/,/\d/,/\d/,/\d/],
      cep : [/\d/,/\d/,/\d/,/\d/,/\d/,'-',/\d/,/\d/,/\d/]
    };
  }

}
