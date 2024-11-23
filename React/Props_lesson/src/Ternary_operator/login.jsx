import React from "react";
import Input from "./input"

function loginpage(){
    return(
        <form>
            <Input
            placeholder="username"
            type="text"
            />
            <Input
            placeholder="password"
            type="password"
            />
            <button>SUBMIT</button>
        </form>
    )
}

export default loginpage