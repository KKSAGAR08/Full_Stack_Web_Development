import React from "react";
import Login from "./login"
import "./style.css"
const val=false

function rendercontion(){
    
    if(val===true){
        return(<h1>Hello</h1>)
    }else{
        return(<Login/>)
    }

}
function App(){
    return(
        
        <div className="container">
        {rendercontion()}
        </div>
    )
}

export default App;