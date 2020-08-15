// 1.创建store
import {observable, action} from 'mobx'

class AuthStore {
  @observable isLogin = false
  @observable isLoading = false
  @observable values = {
    username：'',
    password：''
  }

  @action setIsLogin(isLogin) {
    this.isLogin = isLogin
  }

  @action setUsername(name) {
    this.values.username = name
  }
  @action setPassword(pword) {
    this.values.password = pword
  }

  @action login() {}
  @action register() {}
  @action logout() {}
}

export default AuthStore