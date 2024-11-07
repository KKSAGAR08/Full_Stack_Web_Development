import React from "react";

const image = "https://picsum.photos/200/300";
function Element(){
    return(
        <div>
            <h1>Random Images</h1>
            <div>
            <img src={image + "?grayscale"} alt="Photo"></img>
            </div>
        </div>
    )
}
export default Element;