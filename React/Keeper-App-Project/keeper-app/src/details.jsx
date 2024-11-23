import React from "react";
import Notes from "./display"
import note from "./components/notes"


function notes(props){
    return(
        note.map((valufornotes)=>{
            return(
                <Notes
                key={valufornotes.Key}
                title={valufornotes.title}
                content={valufornotes.content}
                />
                 )
        })
            
    )
    
}

export default notes;