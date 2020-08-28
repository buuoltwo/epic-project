//2
import { createContext, useContext } from 'react';
import TestStore from './about.test';
import AuthStore from './authStore';
import UserStore from './userStore';

const context = createContext( {
  TestStore,
  AuthStore,
  UserStore
});

window.stores = {
  TestStore,
  AuthStore,
  UserStore
}

//3
const useStores = () => useContext(context);
export default useStores;