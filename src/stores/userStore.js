import { observable, action } from 'mobx';
import { Auth } from '../model';

class UserStore {
  @observable currentUser = null;
  @action pullUser() {
    this.currentUser = Auth.getCurrentUser();
  };
}

export default new UserStore();