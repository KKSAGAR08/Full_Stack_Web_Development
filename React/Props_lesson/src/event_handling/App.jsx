import React, { useState } from "react";
import "./style.css"

function App() {
const [beforeClick, afterClick] = useState("Hello")
const [isMouseOver,setMouseOver] = useState(false)

function buttonClicked(){
    afterClick("Submitted");
}
function styleChanged(){
    setMouseOver(true)
}
function styleComback(){
    setMouseOver(false)
}


  return (
    <div className="container">
      <h1>{beforeClick}</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={{backgroundColor: isMouseOver?"black":"white"}} 
      onMouseOver={styleChanged} 
      onClick={buttonClicked}
      onMouseOut={styleComback}
      >Submit</button>
    </div>
  );
}

export default App;
