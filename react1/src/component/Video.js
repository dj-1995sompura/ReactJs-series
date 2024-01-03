import React from "react"
import './component.css'
function Video({title="Enter Title",view="No",time="1 min", varify=false,id,children}) {
    let chennel ="baba ka gyan"
    // let varified = true
    // let chennelvar;
    // if(varified){
    //   chennelvar = <div className='chennel'>{chennel}✅</div>
    // }else{
    //   chennelvar =  <div className='chennel'>{chennel}</div>
    // }
    return (
      <div className='item'>
        <img src={`https://picsum.photos/id/${id}/300/300.jpg`} alt="" />
        <div className='title'>{title}</div>
        <div className='chennel'>{chennel}{varify?'✅':null}</div>
        <div className='info'>
          <span>{view} views</span>
          <span>{time} ago</span>
        </div>
        {children}
      </div>
    )
  }
  
  export default Video

