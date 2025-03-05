import { useReducer, useState } from "react";
import { TodoContext } from "./TodoContext";
import { todoReducer, initialState } from "./TodoContext";

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [searchQuery, setSearchQuery] = useState("");

  const addTodo = (todo) => {
    dispatch({ type: "ADD_TODO", payload: todo });
  };

  const removeTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", payload: id });
  };

  const toggleTodo = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  const editTodo = (id, newText) => {
    dispatch({ type: "EDIT_TODO", payload: { id, newText } });
  };

  const filteredTodos = state.todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <TodoContext.Provider
      value={{
        todos: filteredTodos,
        addTodo,
        removeTodo,
        toggleTodo,
        editTodo,
        setSearchQuery,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
