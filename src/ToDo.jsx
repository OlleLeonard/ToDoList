
import React, { useState } from 'react';
import FunctionList from "./components/FunctionList";
import List from "./components/FunctionList";

function ToDo() {
  const [input, setInput] = useState("");

  return (
    <div className="App-Body">
      <FunctionList>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <List />
      </FunctionList>
    </div>
  );
}

export default ToDo;