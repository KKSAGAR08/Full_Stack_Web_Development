import React from "react";
import ReactDOM from "react-dom";

const name = "xyz";

const date = new Date().getFullYear();
ReactDOM.render(
    <div>
        <p>My Name is {name}</p>
        <p>copyright {date}</p>
    </div>,
    document.getElementById("root")
);