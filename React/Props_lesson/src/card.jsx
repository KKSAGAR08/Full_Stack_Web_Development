import React from "react";
import "./style.css";



function App(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name1}</h2>
          <img className="circle-img"
            src={props.url}
            alt="avatar_img"
          />
        </div>
        <div className="bottom">
          <p className="info">{props.phoneno}</p>
          <p className="info">{props.email}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
