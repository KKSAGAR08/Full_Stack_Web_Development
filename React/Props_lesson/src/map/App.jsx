import React from "react";
import Card from "./card"
import "./style.css";
import contacts from "./contact"

function createCard(contact){
  return(
    <Card name={contact.name} 
    url={contact.imgURL}
    phoneno = {contact.phone}
    email = {contact.email}
    />
  )
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}

      {/* <Card
      name = "Virat Kohli"
      url = "https://dims.apnews.com/dims4/default/050a6ec/2147483647/strip/true/crop/5161x3439+0+0/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F6c%2F8c%2Fbd07e295b24ff2be5adaa320cec4%2Fac27ec12e9454f1da977f03fa16920f1"
      phoneno = "8372829151"
      email = "virat.kholi@gmail.com"
      ></Card>

      <Card
      name = {contacts[0].name}
      url = {contacts[0].imgURL}
      phoneno = {contacts[0].phone}
      email = {contacts[0].email}
      ></Card>

<Card
      name = {contacts[1].name}
      url = {contacts[1].imgURL}
      phoneno = {contacts[1].phone}
      email = {contacts[1].email}
      ></Card>

<Card
      name = {contacts[2].name}
      url = {contacts[2].imgURL}
      phoneno = {contacts[2].phone}
      email = {contacts[2].email}
      ></Card> */}

    </div>
  );
}

export default App;
