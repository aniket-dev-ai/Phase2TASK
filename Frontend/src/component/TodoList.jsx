import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import Search from "./Search";
import AddButton from "./AddButton";
import Editbutton from "./Editbutton";
import TickBox from "./TickBox";
import DeleteButton from "./DeleteButton";

function TodoList() {
  const { todos, addTodo, removeTodo, toggleTodo, editTodo, setSearchQuery } =
    useContext(TodoContext);
  const [newTodo, setNewTodo] = useState("");
  const [editingTodo, setEditingTodo] = useState(null);
  const [editingText, setEditingText] = useState("");
  // Removed searchQuery state

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

  const handleEditTodo = (id, text) => {
    setEditingTodo(id);
    setEditingText(text);
  };

  const handleSaveEdit = (id) => {
    editTodo(id, editingText);
    setEditingTodo(null);
    setEditingText("");
  };

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="flex">
        <Search
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <AddButton onClick={handleAddTodo} />
      </div>
      <div className="flex">
        {filteredTodos.map((todo) => (
          <div key={todo.id} className="flex items-center">
            <TickBox
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            {editingTodo === todo.id ? (
              <input
                type="text"
                value={editingText}
                onChange={(e) => setEditingText(e.target.value)}
              />
            ) : (
              <span className={todo.completed ? "line-through" : ""}>
                {todo.text}
              </span>
            )}
            {editingTodo === todo.id ? (
              <button onClick={() => handleSaveEdit(todo.id)}>Save</button>
            ) : (
              <Editbutton onClick={() => handleEditTodo(todo.id, todo.text)} />
            )}
            <DeleteButton onClick={() => removeTodo(todo.id)} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
