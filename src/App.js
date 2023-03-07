import './App.css';
import json from './todos.json';

import { TodoCreator } from './components/todo-creator';
import { TodoColumn } from './components/todo-column';
import { DoneColumn } from './components/done-column';

import { useState } from 'react';


function App() {
  let [todos, setTodos] = useState(json);
  let [renamedIndex, setUpdatedIndex] = useState(null);

  const addTodo = (title) => {
    setTodos([...todos, { title, isDone: false }])
  }

  const removeTodo = (index) => {
    const tds = todos.filter((todo, idx) => index !== idx);
    setTodos(tds);
  };

  const checkTodo = (index) => {
    const tds = todos.map((todo, idx) => {
      if (idx === index) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });
    setTodos(tds);
  };

  const changeTitle = (index) => {
    const tds = todos.map((todo, idx) => {
      if (idx === index) {
        if (renamedIndex === null) {
          setUpdatedIndex(index);
        } else {
          todo.title = document.querySelector("#updateTaskInput").value;
          setUpdatedIndex(null);
        }
      }
      return todo;
    });
    setTodos(tds);
  };

  return (
    <main className="App">
      <h1>Todo app</h1>
      <hr />

      <TodoCreator createTodo={addTodo} />

      <div id="todo__columns">
        <TodoColumn
          removeTodo={removeTodo}
          changeTitle={changeTitle}
          checkTodo={checkTodo}
          renamedIndex={renamedIndex}
          todos={todos}
        />

        <DoneColumn
          removeTodo={removeTodo}
          changeTitle={changeTitle}
          checkTodo={checkTodo}
          renamedIndex={renamedIndex}
          todos={todos}
        />
      </div>
    </main>
  );
}

export default App;
