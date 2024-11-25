import React from "react";

function loginpage(props){
    return(
        <form>
            <input placeholder={props.username} type="text"></input>
            <input placeholder={props.password} type="password"></input>
            {props.register === false && <input placeholder="confirm password" type="password"></input> } 
            <button type="submit">{props.register === true?"Login":"Register"}</button>
        </form>
    )
}

export default loginpage