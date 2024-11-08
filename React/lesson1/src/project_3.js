import React from "react";
import "./Image_food.css";

const date = new Date();
const time = date.getHours();

let greating;
let color;
if(time<12){
    greating = "Good Morning";
    color = {
        color:"red"
    }
}
else if(time<18){
    greating = "Good Afternoon"
    color = {
        color:"green"
    }
}
else{
    greating = "Good Evening"
    color = {
        color:"blue"
    }
}


function practiceProblem3(){
   return(
    <div className="heading" >
    <h1 style= {color}>{greating}</h1>
    </div>
   )
}
export default practiceProblem3;