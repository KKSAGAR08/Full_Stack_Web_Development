import React, { useState } from "react";
import "./style.css"
function App() {
    const[target,setTarget] = useState("")
    const[headingText,setHeadingText] = useState("")

function handleEvent(event){
    setTarget(event.target.value)
}
function displayName(event){
    setHeadingText(target)
    event.preventDefault();
}


  return (
    <div className="container">
        <form onSubmit={displayName}>
      <h1>Hello {headingText} </h1>
      <input onChange={handleEvent} type="text" placeholder="What's your name?" />
      <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
