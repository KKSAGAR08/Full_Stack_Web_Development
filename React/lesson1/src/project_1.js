import React from "react";

const name = "xyz";

const date = new Date().getFullYear();
// HTML Global Attributes
function Project_1(){
    return(
        <div>
        <h3 className="heading" contentEditable="true" spellCheck="false">My Name is {name}</h3>
        <p><b>copyright @</b> {date}</p>
        </div>
    )
};

export default Project_1;