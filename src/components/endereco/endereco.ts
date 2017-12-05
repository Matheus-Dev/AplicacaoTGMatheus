import { Endereco } from './../../models/endereco';
import { EnderecoProvider } from './../../providers/endereco/endereco';
import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import {Directive} from 'ionic3-input-mask';
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

  @Output() emissorEndereco = new EventEmitter();
  @ViewChild("Numero") public numeroInput: ElementRef;

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
      phoneNumber: ['(',/[1-9]/,/\d/,')',/\d{4,5}/,'-',/\d/,/\d/,/\d/,/\d/],
      //cep : [/\d/,/d/,/d/,/d/,/d/,'-',/d/,/d/,/d/]
      cep : [/\d/]
    };
  }

  enviarDadosEndereco(){
    this.emissorEndereco.emit({endereco : this.endereco});
  }

  buscarCep(){
    let info: any;
    let input : any;
    this.enderecoService.getCep(this.endereco.cep).then(sucess => {
      info = sucess;
      this.endereco = info;
      input = this.numeroInput;
      input._native.nativeElement.focus();
    })
    .catch(error => {

    });
  }

}
