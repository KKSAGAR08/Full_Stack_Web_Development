import React from "react";
import Login from "./login"
import "./style.css"
const isRegisterd=false


function App(){
    return(
        
        <div className="container">
        <Login
        username="Username"
        password="password"
        register={isRegisterd}
        />
        </div>
    )
}

export default App;