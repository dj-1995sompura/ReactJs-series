import React from 'react'
import { useState } from 'react';

function Button({children,onPlay,onPause}) {
  let [playing, setPlaying] = useState(true);

  const handleclick =(e)=>{
    // console.log(e.ctrlKey);
    e.stopPropagation();
    // console.log(e);
    if(playing) onPause()
    else onPlay()
    
    setPlaying(!playing);
  }
  return (
    <div>
      <button onClick={handleclick}>{children} {playing ? '⏸️':'▶️'} </button>
    </div>
  )
}

export default Button
