import React,{useState} from "react";
import ReactDOM from "react-dom"
import "../Time_Practise/style.css"


function App(){
setInterval(getTime,1000)

const now = new Date().toLocaleTimeString()

const[count,setCount] = useState(now)


function getTime(){
   var currentTime = new Date().toLocaleTimeString()
   setCount(currentTime)
   
}

return(
    <div className="container">
    <h1>{count}</h1>
    <button onClick={getTime}>Get Time</button>
    </div>
)
}
export default App;