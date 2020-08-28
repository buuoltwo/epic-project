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
  },
  getCurrentUser() {
    return AV.User.current();
  },
  logOut(){
    AV.User.logOut();
  }
};

const Uploader = {
  add({filename, file}) {
    // console.log("model..")
    const imglist = new AV.Object("Imglist");
    imglist.set('filename', filename);
    imglist.set('owner', AV.User.current());
    console.log(filename);
    console.log(file);
    let avFile = new AV.File(filename, file);
    imglist.set('image', avFile);
    let p3 = new Promise( (resolve, reject) => {
      imglist.save()
        .then((serverfile)=>resolve(serverfile))
        .catch(err => {
          reject(err);
          console.log(err);
        })
    });
    return p3;
  }
}

export { Auth, Uploader };