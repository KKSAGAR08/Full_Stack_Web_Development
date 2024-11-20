import React from "react";
import "../Map_component/style.css"

function Entry(props){
    return(
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              {props.emoji}
            </span>
            <span>{props.name}</span>
          </dt>
          <dd>
            {props.mean}
          </dd>
        </div>
    )
}

export default Entry;