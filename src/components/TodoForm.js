import React, { useState, useContext } from "react";
import {
  Form,
  FormGroup,
  InputGroup,
  Input,
  InputGroupAddon,
  Button,
} from "reactstrap";
import { v4 } from "uuid";
import { TodoContext } from "../context/themeContext/TodoContext";
import { ADD_TODO } from "../context/themeContext/action.types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TodoForm = () => {
  const [todoString, setTodoString] = useState("");

  const { dispatch } = useContext(TodoContext);

  const handleOnChange = (e) => {
    setTodoString(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (todoString === "") {
      return toast("Please add a todo", { type: "error", toastId: 1 });
    } 
    const todo = {
      id: v4(),
      todoString,
    };

    dispatch({ type: ADD_TODO, payload: todo });
    setTodoString("");
    
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <ToastContainer position="bottom-center" />
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            id="todo"
            name="todo"
            placeholder="Your next TODO"
            value={todoString}
            onChange={handleOnChange}
            autoComplete="off"
          />
          <InputGroupAddon addonType="prepend">
            <Button color="warning">ADD</Button>
          </InputGroupAddon>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};

export default TodoForm;
