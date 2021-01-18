import React, {useContext} from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import {TodoContext} from '../context/themeContext/TodoContext';
import { FaCheckDouble, FaTrash } from 'react-icons/fa';
import { REMOVE_TODO } from "../context/themeContext/action.types";

const Todos = () => {
    const { todos, dispatch } = useContext(TodoContext);


    const handleOnClick = (id) => {
        dispatch({type: REMOVE_TODO, payload: id })
    }

    const todoItems = todos.map(todo => {
        return (
            <ListGroupItem key ={todo.id}>
                {todo.todoString}
                {/* <FaTrash className="float-right ml-5 delete"/> */}
                <FaCheckDouble className="float-right done" onClick={ () => handleOnClick(todo.id)} title="mark complete"/>
            </ListGroupItem>
        )

    })
    return (
        <ListGroup className="mt-5 mb-2 items">
            {todoItems}
        </ListGroup>
    )
}

export default Todos;