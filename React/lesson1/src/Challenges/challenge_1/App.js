import React from "react";
import * as val from "./calculator"

function calculate(){
    return(
        <div>
        <h1>Caluculator</h1>
        <ul>
            <li>{val.add(10,20)}</li>
            <li>{val.sub(20,10)}</li>
            <li>{val.multiply(2,10)}</li>
            <li>{val.divide(20,10)}</li>
        </ul>
        </div>
    )
}

export default calculate;