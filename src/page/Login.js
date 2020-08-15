import React, {useRef} from 'react'
import { observer } from 'mobx-react'
import useStores from '../stores/index'

const Component = observer(
  () => {
    const { authStore } = useStores()
    const inputRef = useRef()
    const bindChange = (e) => {
      // console.log(inputRef.current.value)
      authStore.values.username = inputRef.current.value
    }
    return (
      <>
        <h1>登录</h1>
        <p>测试mobx: {authStore.values.username}</p>
        <input onChange={bindChange} ref={inputRef}></input>
      </>
    )
  }
)
export default Component