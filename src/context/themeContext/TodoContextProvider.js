import React, { useReducer, useEffect } from "react";
import { TodoContext } from "./TodoContext";
import todoReducer from "./reducer";
import { INITIALIZE_TODO } from "./action.types";

const TodoContextProvider = (props) => {

    const [todos, dispatch] = useReducer(todoReducer, []);

    useEffect (() => {
        const localTodos = localStorage.getItem("todos");
        if(localTodos) {
            dispatch({ type: INITIALIZE_TODO, payload: JSON.parse(localTodos) });
        }
    },[]);

    useEffect (() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    },[todos]);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </TodoContext.Provider>
  );
}

export default TodoContextProvider;