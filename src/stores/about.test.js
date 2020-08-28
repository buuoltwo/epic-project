import { observable, action } from 'mobx';

//1
class testStore {
  @observable varible = 0;

  @action count() {
    this.varible++;
  }
};

export default new testStore();

// console..
// window.stores.userStores....