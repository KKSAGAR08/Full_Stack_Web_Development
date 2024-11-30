import React, { useState } from "react";
import "./style.css"


function App() {

    const [fullname,setFullName] = useState({
        fname:"",
        lname:""
    });

   function handleChange(event){
    const{value,name} = event.target;

    setFullName(prevalue=>{
        if(name === "fname"){
            return{
                fname: value,
                lname: prevalue.lname
            }
        }
        else if(name === "lname"){
            return{
                fname:prevalue.fname,
                lname:value
            }
        }

    });
   }

  return (
    <div className="container">
      <h1>Hello {fullname.fname} {fullname.lname}</h1>
      <form>
        <input
        onChange={handleChange}
        name="fname" placeholder="First Name" 
        value={fullname.fname}
        />
        <input 
        onChange={handleChange}
        name="lname" placeholder="Last Name" 
        value={fullname.lname}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
