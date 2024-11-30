import React, { useState } from "react";
import "./style.css"

function App() {

    const [inputData,setInputData] = useState("");
    const [itemlist,setItemList] = useState([]);

    function handleEvent(event){
       const value = event.target.value;
       setInputData(value)
    }

    function addTodoList(){
        setItemList((prevalue)=>{
            return [...prevalue,inputData]
        })
        setInputData("")
    }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleEvent} type="text" value={inputData} />
        <button onClick={addTodoList}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {itemlist.map(todolist=><li>{todolist}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
