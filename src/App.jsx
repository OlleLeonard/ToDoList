import { useState } from "react";
import Header from "./Header";

import React from 'react'

function App() {

const [list, setList] = useState([]);
const [input, setInput] = useState ("");

const addTodo = (todo) => {
  const newTodo = {
    id: Math.random(),
    todo: todo
  }

  setList([...list,newTodo]);

  setInput("");
};

const deleateTodo = (id) => {
  const newList = list.filter((todo) => todo.id !== id);
  setList(newList);
};

  return (
    <div>
      <h1>ToDo List</h1>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
      <button onClick={() => addTodo(input)}>Lägg till i listan</button>

      <ul>
        {list.map((todo) => (
          <li key={todo.id}>
          {todo.todo}
          <button onClick={() => deleateTodo(todo.id)}>X</button>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App