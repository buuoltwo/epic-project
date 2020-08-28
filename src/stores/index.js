//2
import { createContext, useContext } from 'react';
import TestStore from './about.test';
import AuthStore from './authStore';

const context = createContext( {
  TestStore,
  AuthStore
});

window.stores = {
  TestStore,
  AuthStore
}

//3
const useStores = () => useContext(context);
export default useStores;