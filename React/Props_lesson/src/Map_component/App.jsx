import React from "react";
import Entry from "./entry"
import emojipedia from "./emojipedia"

function getDetails(emojiTerm){
  return(
    <Entry
    emoji={emojiTerm.emoji}
    name={emojiTerm.name}
    mean={emojiTerm.meaning}
    />
  )
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
       {emojipedia.map(getDetails)}
      </dl>
    </div>
  );
}

export default App;
