import React, { useState, useEffect } from "react";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <h2>Список дел (из API)</h2>
      {isLoading ? (
        <p>Загрузка...</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
