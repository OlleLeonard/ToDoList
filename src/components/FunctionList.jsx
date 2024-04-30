import React, { useState } from 'react';
import Box from './Box';

function List() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo
    };

    setList([...list, newTodo]);
    setInput("");
  };

  const deleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  };

  return (
    <div>
         <h1>Todo List</h1>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => addTodo(input)}>Lägg till i listan</button>

      <ul>
        {list.map((todo) => (
          <li key={todo.id}>
            {todo.todo}
            <button><Box></Box></button>
            <button onClick={() => deleteTodo(todo.id)}>Ta bort</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;