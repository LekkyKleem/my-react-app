import "./styles.css";
import React, { useState } from "react";
import "./styles.css";
import Hello from "./Hello";
import Counter from "./Counter";
import TodoList from "./TodoList"; // Подключаем список дел

function App() {
  return (
    <div className="app">
      <h1>Привет, React!</h1>
      <Hello />
      <Counter />
      <TodoList />
    </div>
  );
}

export default App;
