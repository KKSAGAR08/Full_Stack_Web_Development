import React, { useState } from "react";
import "./style.css"


function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event){
    const{value,name} = event.target;

    setContact(prevalue=>{
        if(name === "fName"){
            return{
                fName:value,
                lName:prevalue.lName,
                email:prevalue.email
            }
        }
        else if(name === "lName"){
            return{
                fName:prevalue.fName,
                lName:value,
                email:prevalue.email
            }
        }
        else if(name === "email"){
            return{
                fName:prevalue.fName,
                lName:prevalue.lName,
                email:value
            }
        }
    })
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input name="fName" onChange={handleChange} placeholder="First Name" value={contact.fName} />
        <input name="lName" onChange={handleChange} placeholder="Last Name" value={contact.lName} />
        <input name="email" onChange={handleChange} placeholder="Email" value={contact.email} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
