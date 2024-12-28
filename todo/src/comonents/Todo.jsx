import React, { useState } from 'react';
import "./Todo.css"

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleInput = (e) => {
    setNewTodo(e.target.value);
  };

  const addNewTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo(""); 
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add todos..."
        value={newTodo}
        onChange={handleInput}
      />
      <button onClick={addNewTodo}>Add</button>
      <br />
      <h4>New Tasks</h4>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};
