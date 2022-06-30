import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import TodoForm from "../../components/todo/TodoForm";
import TodoList from "../../components/todo/TodoList";
import './Todo.css';
import {addTodoAction, deleteTodoAction} from '../../redux';

function Todo() {

  // redux global state  instead of local

  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const addTodo = (task) => {
      dispatch(addTodoAction(task));
  };

  const deleteTodo = (index) => {
    dispatch(deleteTodoAction(index))
  }

  return (
    <div className="text-center py-2 todo-wrapper container">
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default Todo;
