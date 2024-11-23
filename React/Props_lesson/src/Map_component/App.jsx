import React from "react";
import Entry from "./entry"
import emojipedia from "./emojipedia"
import Substring from "./substring"


function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <Substring/>
      <dl className="dictionary">
       {emojipedia.map((emojiTerm) =>{
        return(
          <Entry
          key={emojiTerm.id}
          emoji={emojiTerm.emoji}
          name={emojiTerm.name}
          mean={emojiTerm.meaning}
          />
        )
       })}
      </dl>
    </div>
  );
}

export default App;