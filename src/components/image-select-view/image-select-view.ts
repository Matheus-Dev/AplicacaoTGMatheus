import { Animal } from './../../models/animal';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ImagePicker } from '@ionic-native/image-picker';
import { ImageResizer, ImageResizerOptions } from '@ionic-native/image-resizer';

/**
 * Generated class for the ImageSelectViewComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'image-select-view',
  templateUrl: 'image-select-view.html'
})
export class ImageSelectViewComponent {
  @Input() animal : Animal = new Animal();
  
  @Output() novaImagem = new EventEmitter();

  imageBase64 : string = this.animal.image;

  imageurlfrompicker : any;
  imageurlfromresizer: any;
  //imagebase64: any;

  constructor(public imagePicker: ImagePicker,
              public imageResizer: ImageResizer) {
  }

  getImage() {
    let options = {
      maximumImagesCount: 1,
      width: 720,
      height: 1280,
      quality: 100,
      outputType: 0
    };
    this.imagePicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {
        this.imageurlfrompicker = results[i];
        let resizeoptions = {
          uri: results[i],
          //folderName: 'demofolder',
          quality: 100,
          width: 1280,
          height: 1280
        } as ImageResizerOptions;
        this.imageResizer
          .resize(resizeoptions)
          .then((filePath: string) => {
            this.imageurlfromresizer = filePath;
            this.convertToBase64(filePath, 'image/jpg').then(
              data => {
                this.imageBase64 = data.toString();
              }
            );
          })
          .catch(e => console.log(e));
      }
    }, (err) => { });
  }

  convertToBase64(url, outputFormat) {
    return new Promise((resolve, reject) => {
      let img = new Image();
      img.crossOrigin = 'Anonymous';
      img.onload = function () {
        let canvas = <HTMLCanvasElement>document.createElement('CANVAS'),
          ctx = canvas.getContext('2d'),
          dataURL;
        canvas.height = img.height;
        canvas.width = img.width;
        ctx.drawImage(img, 0, 0);
        dataURL = canvas.toDataURL(outputFormat);
        canvas = null;
        resolve(dataURL);
      };
      img.src = url;
    });
  }

  /*selecionarImagem(){
    let image = '';
    image = this.imageSelectResize.returnStringBase64();
    alert("Selecionar Image" + image);
    this.alterarImagem(image);
  }

  alterarImagem(image){
    this.imageBase64 = image;
  }*/

  salvarImagem(){
    this.novaImagem.emit(this.imageBase64)
  }

}
