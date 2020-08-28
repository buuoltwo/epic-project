import { observable, action } from 'mobx';
import { Auth } from '../model';
import UserStore from './userStore';
import ImgStore from './imgStore';

class AuthStore {
  @observable username = '';
  @observable password = null;
  @observable loading = false;

  @action setUsername(newNme) {
    this.username = newNme;
  };

  @action setPassword(newPwd) {
    this.password = newPwd;
  };

  @action register() {
    let p2 = new Promise ((resolve, reject) => {
      Auth.register(this.username, this.password)
      .then(user => {
        resolve(user);
        UserStore.pullUser();
      })
      .catch(err => reject(err))
    });
    return p2;
  };
  @action login() {
    return new Promise ((resolve, reject) => {
      Auth.login(this.username, this.password)
      .then(user => {
        resolve(user);
        UserStore.pullUser();
      })
      .catch(err => reject(err))
    });
  };
  @action logOut() {
    Auth.logOut();
    ImgStore.resetImg();
    UserStore.pullUser();
  }
}

export default new AuthStore();