import { Auth, Loader } from './index';

Auth.register('nick33y', '1111')
  .then(data => {
    console.log("登录成功");
    console.log(data);
  })

// Loader.add()
// 需要写一个简易ui测试。