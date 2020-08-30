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

//3 测试HistoryStore.find()
// stores.HistoryStore.find().then(data => console.log(data));

//4 在find之后list不为空，此句有效
// stores.HistoryStore.list[0].attributes.image