import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import TodoForm from "../../components/todo/TodoForm";
import TodoList from "../../components/todo/TodoList";
import './Todo.css';
import {addTodoAction, deleteTodoAction} from '../../redux/oldReduxConfig';
import {addTodo, deleteTodo} from '../../redux/features/todoSlice'

function Todo() {

  // redux global state  instead of local

  const todos = useSelector(state => state.todoReducer.todos);

  const dispatch = useDispatch();

  const onAddTodo = (task) => {
      // dispatch(addTodoAction(task));
      dispatch(addTodo(task)); 
  };

  const onDeleteTodo = (index) => {
    // dispatch(deleteTodoAction(index))
    dispatch(deleteTodo(index))
  }

  return (
    <div className="text-center py-2 todo-wrapper container">
      <TodoForm addTodo={onAddTodo} />
      <TodoList todos={todos} deleteTodo={onDeleteTodo} />
    </div>
  );
}

export default Todo;
