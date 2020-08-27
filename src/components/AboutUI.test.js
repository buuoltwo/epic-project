import React from "react";
import useStores from '../stores';
import { observer } from "mobx-react";

//4
const Component = observer( (props) => {
  const { TestStore } = useStores();
  const bindChange = () => {
    TestStore.count();
  }
  
  return (
    <>
      <label for="test">{TestStore.varible}</label>
      <input id="test" placeholder="test aboutStore.." type="number" onChange={bindChange}></input>
    </>
  )
} )

export default Component;