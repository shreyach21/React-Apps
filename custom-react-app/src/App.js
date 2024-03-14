import React, { useState } from "react";


function App() {
  const [counter,setCounter]=useState(0)
  const updateCounter=()=>{
    setCounter(counter+1)
  }
  return (
    <>
    <h1>Counter: {counter}</h1>
    <button onClick={updateCounter}>
      Click to update conter
    </button>
    </>
  );
}

export default App;
