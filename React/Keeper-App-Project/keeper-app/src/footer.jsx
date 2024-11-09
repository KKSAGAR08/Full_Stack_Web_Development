import React from "react";
import "./style.css";

const date = new Date();
const currentDate = date.getFullYear()


function footer(){
    return(
        <footer>
            <p>Copyright ⓒ {currentDate}</p>
        </footer>
    )
}

export default footer;