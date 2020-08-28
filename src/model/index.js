import AV from "leancloud-storage";

AV.init({
  appId: "wYuxfkJwHdyYtnpyh3yS4vns-gzGzoHsz",
  appKey: "c29nrBB9aUdNoBQC7W1aluG4",
  serverURL: "https://wyuxfkjw.lc-cn-n1-shared.com"
});

const Auth = {
  register(username, password) {
    const user = new AV.User();
    user.setUsername(username);
    user.setPassword(password);
    let p1 = new Promise((resolve, reject) => {
      user.signUp().then( (user)=> resolve(user))
        .catch(err=> reject(err))
    });
    return p1;
  },
  login(username,password) {
    const user = new AV.User();
    user.setUsername(username);
    user.setPassword(password);
    return new Promise((resolve, reject) => {
      user.logIn().then( (user)=> resolve(user))
        .catch(err=> reject(err))
    });
  }
};

export { Auth };