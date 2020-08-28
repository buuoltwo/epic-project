import { Auth, Uploader } from './index';

//1.
// Auth.register('nick33y', '1111')
//   .then(data => {
//     console.log("登录成功");
//     console.log(data);
//   })

//2.
// Uploader.add()
// 需要写一个简易ui测试。

//3.写一个promise测试CRUD_R..
//这个测试位置是尴尬的。
//思考：应该在登录状态下，控制台中，输入这句话试试看。
// Uploader.find({page:0, limit:10}).then( data => console.log(data) );
window.Uploader = Uploader;