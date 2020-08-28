import { observable, action } from 'mobx';
import { Uploader } from '../model';

class ImgStore {
  @observable filename = "";
  @observable file = null;
  @observable isLoading = false;

  @action setFilename(newNme) {
    this.filename = newNme;
  };
  @action setFile(newFile) {
    this.file = newFile;
  };
  @action add() {
    this.isLoading = true;
    console.log("store..")
    let p4 = new Promise( (resolve, reject) => {
      Uploader.add({filename:this.filename,file:this.file})
      .then(serverfile => resolve(serverfile))
      .catch(err => {
        reject(err);
        console.log(err);
      })
      .finally(()=> this.isLoading=false)
    });
    return p4;
  }
}

export default new ImgStore();