import React from "react";

function image(props){
    return(
        <img className="circle-img"
            src={props.url}
            alt="avatar_img"
          />
    )
}

export default image;