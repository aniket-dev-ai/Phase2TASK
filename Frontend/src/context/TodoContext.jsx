import React, { createContext } from "react";

const initialState = {
  todos: [],
};

export const TodoContext = createContext(initialState);
