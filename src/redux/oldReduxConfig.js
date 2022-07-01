
const ADD_TODO = 'ADD_TODO_ACTION';

// ACTIONS
export const addTodoAction = (payload) => {
  return {
    type: ADD_TODO,
    payload: payload,
  };
};

export const deleteTodoAction = (payload) => {
  return {
    type: 'DELETE_TODO',
    payload,
  };
};

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

// REDUCER_TODO
export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };

    case 'DELETE_TODO':
      return {
        ...state,
        todos: [
          ...state.todos.filter((item, index) => {
            return index !== action.payload;
          }),
        ],
      };
    default:
      return state;
  }
};


