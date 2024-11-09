import React from "react";
import ReactDOM from "react-dom";
import Header from "./header";

const img = {
  width: "200px",
  height: "200px",
};

function Card(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <img style={img} src={props.img} />
      <p>{props.number}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <Header />
    <Card
      name="Virat Kholi"
      img="https://wallpapercat.com/w/full/e/9/1/150106-2880x1620-desktop-hd-virat-kohli-background-photo.jpg"
      number="9141879542"
      email="kksagar@outlook.com"
    />
  </div>,
  document.getElementById("root")
);
