import React from 'react'

function Button({children,onPlay,onPause}) {
  let playing = true;
  const handleclick =(e)=>{
    // console.log(e.ctrlKey);
    e.stopPropagation();
    // console.log(e);
    if(playing) onPause()
    else onPlay()
    
    playing= !playing
  }
  return (
    <div>
      <button onClick={handleclick}>{children}</button>
    </div>
  )
}

export default Button
