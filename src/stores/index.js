//2 createContext方法
//3 useContext方法

import React, {createContext, useContext} from 'react'
import AuthStore from './auth'

const storeContext = React.createContext({
  authStore: new AuthStore()
})

const useStores = () => useContext(storeContext)

export default useStores