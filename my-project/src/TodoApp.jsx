import React, { useState } from "react";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className={`${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      } h-screen`}
    >
      <div className="p-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="mb-4 p-2 bg-blue-500 text-white rounded"
        >
          Toggle {darkMode ? "Light" : "Dark"} Mode
        </button>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search todos..."
          className={`${
            darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
          } mb-4 p-2 border rounded w-full`}
        />
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo..."
          className={`${
            darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
          } mb-4 p-2 border rounded w-full`}
        />
        <button
          onClick={addTodo}
          className="mb-4 p-2 bg-green-500 text-white rounded"
        >
          Add Todo
        </button>
        <ul>
          {filteredTodos.map((todo, index) => (
            <li key={index} className="mb-2 flex justify-between items-center">
              <span className={todo.completed ? "line-through" : ""}>
                {todo.text}
              </span>
              <button
                onClick={() => deleteTodo(index)}
                className="ml-4 p-2 bg-red-500 text-white rounded"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoApp;
