import { useState } from "react";
import Header from "./Header";

import React from 'react'

function App() {

const [list, setList] = useState([]);
const [input, setInput] = useState ("");

  return (
    <div>
      <h1>ToDo List</h1>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
      <button>Lägg till i listan</button>
    </div>
  )
}

export default App