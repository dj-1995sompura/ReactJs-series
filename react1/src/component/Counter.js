import React from 'react'
import { useState } from 'react';


function Counter() {
    const [number,setNumber] = useState(0);
    const increse = () =>{
        setNumber(number+1);
        // console.log(number);
    }
  return (
    <div>
        <h1>{number}</h1>
      <button onClick={increse}>Add</button>
    </div>
  )
}

export default Counter
