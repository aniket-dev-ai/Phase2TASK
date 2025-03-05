import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import Search from "./Search";
import AddButton from "./AddButton";
import Editbutton from "./Editbutton";
import TickBox from "./TickBox";
import DeleteButton from "./DeleteButton";

function TodoList() {
  const { todos, addTodo, removeTodo, toggleTodo } = useContext(TodoContext);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      addTodo({
        id: Date.now(),
        text: newTodo,
        completed: false,
      });
      setNewTodo("");
    }
  };

  return (
    <div>
      <div className="flex">
        <Search value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
        <AddButton onClick={handleAddTodo} />
      </div>
      <div className="flex">
        {todos.map((todo) => (
          <div key={todo.id} className="flex items-center">
            <TickBox
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span className={todo.completed ? "line-through" : ""}>
              {todo.text}
            </span>
            <Editbutton />
            <DeleteButton onClick={() => removeTodo(todo.id)} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
