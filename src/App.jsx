import React from 'react'
import ReactDOM from 'react-dom/client';
import { useState, useEffect } from 'react';
const App = () => {
let [value, setValue] = useState(10);
const [text, setText] = useState('Random');
// console.log("Component renered");

  useEffect(()=>{
    console.log("Useeffect hooks renered");
  },[]);

  // function increment(){
  //   setValue(value++);
  // }

  return (
    <>
      <h1>UseEffect {text} {value} </h1>
      <button className="btn" onClick={()=>setValue(value+1)}>Change Value</button>
      &nbsp;
      <button className="btn" onClick={()=>setText('Azeem')}>Change Text</button>
    </>

  )
}

export default App