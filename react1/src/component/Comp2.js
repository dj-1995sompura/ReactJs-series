import React from 'react'
import Comp1 from './Comp1'

function Comp2({event}) {
  return (
    <div className='component-2'>
      <Comp1 events={event}></Comp1>
    </div>
  )
}

export default Comp2
