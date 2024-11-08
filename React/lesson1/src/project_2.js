import React from "react";

const image = "https://picsum.photos/200/300";

const headingStyle = {
    color:"red",
    fontSize:"30px",
    border: "1px solid black",
    textAlign: "center"
}

function Element(){
    return(
        <div>
            <h1 style={headingStyle} >Random Images</h1>
            <div>
            <img src={image + "?grayscale"} alt="Photo" />
            </div>
        </div>
    )
}
export default Element;