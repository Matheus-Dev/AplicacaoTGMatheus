import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ImagePicker } from '@ionic-native/image-picker';
import { ImageResizer, ImageResizerOptions } from '@ionic-native/image-resizer';
//import { LoadingController } from 'ionic-angular';

/*
  Generated class for the ImageSeletorConverterProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ImageSeletorConverterProvider {

  imageurlfrompicker : any;
  imageurlfromresizer: any;
  imagebase64: any;

  constructor(public http: HttpClient,
              public imagePicker: ImagePicker,
              public imageResizer: ImageResizer) {
  }

  getImage() {
    let options = {
      maximumImagesCount: 1,
      width: 400,
      height: 400,
      quality: 90,
      outputType: 0
    };
    this.imagePicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {
        alert("Result" + results[i]);
        this.imageurlfrompicker = results[i];
      }  
    }, (err) => { });

    alert("Image From Picker" + this.imageurlfrompicker);

    let resizeoptions = {
      uri: this.imageurlfrompicker,
      folderName: 'demofolder',
      quality: 90,
      width: 400,
      height: 400
    } as ImageResizerOptions;

    this.imageResizer
      .resize(resizeoptions)
      .then((filePath: string) => {
        alert("filePath" + filePath.toString());
        this.imageurlfromresizer = filePath.toString();
        alert("Image Url Resizer" + this.imageurlfromresizer);
      }, (err) => { });
 
    this.convertToBase64(this.imageurlfromresizer,'image/png').then(
      data => {
        alert("Data: " + data.toString());
        this.imagebase64 = data.toString();
        alert("ImageBase" + this.imagebase64);
      }, (err) => {

      });
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

  returnStringBase64() : any{
    this.getImage();
    alert(this.imagebase64)
    return this.imagebase64;
  } 

}
