import React from 'react'

function Comp1({events}) {
  return (
    <div>
      <button onClick={() => events()}>Click Me!</button>
    </div>
  )
}

export default Comp1
