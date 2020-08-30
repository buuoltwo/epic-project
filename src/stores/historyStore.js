import { observable, action } from 'mobx';
import { Uploader } from '../model/index';

class HistoryStore {
  limit = 10;
  @observable page = 0;
  @observable isLoading = false;
  @observable list = [];
  @observable hasMore = true;

  @action append(newList) {
    this.list = this.list.concat(newList);
  }
  @action find() {
    this.isLoading = true;
    let p6 = new Promise((resolve, reject) => {
      Uploader.find({limit:this.limit, page:this.page})
        .then((newlist) => {
          this.append(newlist);
          this.page++;
          // console.log(typeof newlist);
          // console.log(newlist.length);
          if(newlist.length < 10) {
            this.hasMore = false;
          }
          resolve(this);
          // resolve(this.list);
          //似乎不需要封装这个promise~因为resolve出去list数组但用不着，UI层自己会观察的:), resolve(this)可以观察一哈this.hasMore,,但也没用啊，我可以通过全局变量stores.HistortStore.hasMore观察到，应该。
          //list是一个经过Proxy代理的数据，但还是比较好观察的：window.stores.HistoryStore.list[0].attributes.image
        }).catch(err => {
          reject(err);
        }).finally(() => this.isLoading = false)
    });
    return p6;
  };
  @action reset() {
    this.page = 0;
    this.isLoading = false;
    this.list = [];
    this.hasMore = true;
  }
};

export default new HistoryStore();