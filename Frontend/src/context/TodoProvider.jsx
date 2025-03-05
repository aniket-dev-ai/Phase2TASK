import { useReducer } from "react";
import { TodoContext } from "./TodoContext";
import { todoReducer, initialState } from "./TodoContext";

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (todo) => {
    dispatch({ type: "ADD_TODO", payload: todo });
  };

  const removeTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", payload: id });
  };

  const toggleTodo = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        addTodo,
        removeTodo,
        toggleTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
