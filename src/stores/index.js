//2
import { createContext, useContext } from 'react';
import TestStore from './about.test';
import AuthStore from './authStore';
import UserStore from './userStore';
import ImgStore from './imgStore';

const context = createContext( {
  TestStore,
  AuthStore,
  UserStore,
  ImgStore
});

window.stores = {
  TestStore,
  AuthStore,
  UserStore,
  ImgStore
}

//3
const useStores = () => useContext(context);
export default useStores;