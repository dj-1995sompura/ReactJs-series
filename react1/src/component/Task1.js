import React from "react";
import "./task1.css";

function Task1() {
  // event handaler for zoom in out image on hover
  const imgZoomIn = (e) => {
    e.currentTarget.className = "zoomeIn";
    e.stopPropagation();
  };

  const imgZoomOut = (e) => {
    e.currentTarget.className = "zoomeOut";
    e.stopPropagation();
  };

  // event handler for button click and double click
  const handleClick = (e) => {
    e.preventDefault();
    console.log("click");
  };
  const handleDoubleClick = (e) => {
    e.preventDefault();
    alert("its doubleClick");
    console.log("doubleClick!");
  };

  // event handler for focus on or out for input box
  const handleFocus = (e) => {
    e.stopPropagation();
    console.log("focused on the textbox");
  };
  const handleBlur = (e) => {
    e.stopPropagation();
    console.log("out of textbox");
  };

  // handler for enter key only
  const handleEnter=(e)=>{
    if(e.key === "Enter") 
      console.log("Enter pressed!")
  }

  return (
    <div>
      <img
        src="https://picsum.photos/id/237/200/300"
        onMouseEnter={imgZoomIn}
        onMouseLeave={imgZoomOut}
        alt=""
      />
      <form>
        <input
          type="text"
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleEnter}
          placeholder="Type your comment..."
        />
        <button
          type="submit"
          onClick={handleClick}
          onDoubleClick={handleDoubleClick}
          
        >
          Submit
        </button>
      </form>
      {/* for onCopy,onPaste and onCut event */}
      <div className="paragraph">
        <p onCopy={()=>console.log("copy text")} onCut={()=>alert("you can't move content!")}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <textarea rows="30" cols="100" onPaste={()=>alert("data paste succesfully!")}></textarea>
      </div>
    </div>
  );
}

export default Task1;
