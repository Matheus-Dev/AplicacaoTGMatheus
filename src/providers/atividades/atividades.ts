import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http';

import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { AndroidPermissions } from '@ionic-native/android-permissions';
/*
  Generated class for the AtividadesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AtividadesProvider {
  
  urlApi : string = 'http://192.168.0.104:3000/atividade';
  //animal/5a19ca6818d74a2404f8939a/5a19c7d818d74a2404f89395/2017-11-26T16:07:39.040Z/2017-11-26T16:07:39.041Z';
  fileTransfer: FileTransferObject = this.transfer.create();

  options: DocumentViewerOptions = {
    title: 'My PDF'
  }

  constructor(public httpClient: HttpClient, private document: DocumentViewer,
              private transfer: FileTransfer, private file: File,
              private androidPermissions: AndroidPermissions) {
    console.log('Hello AtividadesProvider Provider');
  }

  salvarAtividade(data){
    let api = this.urlApi+'/atividade/adicionar';

    return new Promise((resolve, reject) => {
      this.httpClient.post(api, JSON.stringify(data), {
        headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
      })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getRelatorioAnimal() {
    let api = this.urlApi;

    this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(
      success => {
        this.file.dataDirectory = '/sdcard/Download/';
        this.fileTransfer.download(encodeURI(api), this.file.dataDirectory + 'file.pdf').then((entry) => {
          console.log('download complete: ' + entry.toURL());
    
          alert('download complete: ' + entry.toURL());
        }, (error) => {
          let dados = '';
          for (let key in error){
            let attrName = key;
            let attrValue = error[key];
            dados = dados + ' ' +attrName+' '+attrValue+' \n';
          }
          alert('Error'+dados);
        });
      },
      err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE)
    );

  }

}
