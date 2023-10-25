import './App.css'
import { useState } from 'react'
function App() {
  
 let [counter , setCounter] =  useState (10)

  // let counter = 15

  const addValue = () => {
    console.log('clicked',counter)
    // counter = counter + 1
    if (counter < 20) {
      setCounter(counter + 1);
    }
  }

  const decreaseValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }
                
  return (
    <>
     <h1>REACT COUNTER RPOJECT</h1>
     <h3>COUNTER VALUE : {counter} </h3>

     <button onClick={addValue}>INCREASE VALUE</button>
     <br />
     <br />
     <button onClick={decreaseValue}>DECREASE VALUE</button>
    </>
  )
}

export default App
