import { createSlice } from '@reduxjs/toolkit';

// INITIAL STATE
const initialState = {
  todos: [
    {
      title: 'learn node js',
      content: 'Lorem ipsum dolor sit amet.',
    },
    {
      title: 'go to the sea',
      content: 'Lorem ipsum dolor sit amet.',
    },
    {
      title: 'walk the dog',
      content: 'Lorem ipsum dolor sit amet.',
    },
  ],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log('action', action)
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(
        (item, index) => index !== action.payload
      );
    },
  },
});


export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
