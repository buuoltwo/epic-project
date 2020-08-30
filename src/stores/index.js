//2
import { createContext, useContext } from 'react';
import TestStore from './about.test';
import AuthStore from './authStore';
import UserStore from './userStore';
import ImgStore from './imgStore';
import HistoryStore from './historyStore';

const context = createContext( {
  TestStore,
  AuthStore,
  UserStore,
  ImgStore,
  HistoryStore
});

window.stores = {
  TestStore,
  AuthStore,
  UserStore,
  ImgStore,
  HistoryStore
}

//3
const useStores = () => useContext(context);
export default useStores;