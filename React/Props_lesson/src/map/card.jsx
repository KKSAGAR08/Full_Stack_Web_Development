import React from "react";
import Avatar from "./avatar"
import "./style.css";



function App(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <Avatar url={props.url} />
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
