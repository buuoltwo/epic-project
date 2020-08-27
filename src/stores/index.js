//2
import { createContext, useContext } from 'react';
import TestStore from './about.test';

const context = createContext( {
  TestStore
});

window.stores = {
  TestStore
}

//3
const useStores = () => useContext(context);
export default useStores;