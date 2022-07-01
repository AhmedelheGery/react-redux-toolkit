# Redux Toolkit

#### Docs

[Redux Toolkit Docs](https://redux-toolkit.js.org/introduction/getting-started)

#### Install Template

```sh
npx create-react-app my-app --template redux
```

- @latest

```sh
npx create-react-app@latest my-app --template redux
```

#### Existing App

```sh
npm install @reduxjs/toolkit react-redux
```

#### @reduxjs/toolkit

consists of few libraries

- redux (core library, state management)
- immer (allows to mutate state)
- redux-thunk (handles async actions)
- reselect (simplifies reducer functions)

#### Extras

- redux devtools
- combine reducers

#### react-redux

connects our app to redux

#### Setup Store

- create store.js

```js
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {},
});
```

#### Setup Provider

- index.js

```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import store and provider
import { store } from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
```

#### First Reducer

```js
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
```


#### async functionality with createAsyncThunk


```js
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const baseURL = 'https://fakestoreapi.com'

export const getShopItems = createAsyncThunk('shop/getShopItems', () => {
   return fetch(`${baseURL}/products`)
    .then((res) => res.json())
    .then((json) => json)
    .catch(err=>console.log(err))
})

const initialState = {
    products: [],
    loading: false,
    err:{}
}

const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers:{
        addProduct : () => {
            console.log('add produc')
        }
    },
    extraReducers: {
        [getShopItems.pending] : (state) => {
            // pending
            state.loading = true
        },
        [getShopItems.fulfilled] : (state, action) => {
            // fulfilled
            state.products = action.payload
            state.loading = false
        },
        [getShopItems.rejected] : (state, action) => {
            // rejected
            state.err = action.payload
            state.loading = false
        },
    }
})

export const { addProduct } = shopSlice.actions

export default shopSlice.reducer
```

#### Options

```sh
npm install axios
```

- cartSlice.js

```js
export const getShopItems = createAsyncThunk(
  'cart/getShopItems',
  async (name, thunkAPI) => {
    try {
      // console.log(name);
      // console.log(thunkAPI);
      // console.log(thunkAPI.getState());
      // thunkAPI.dispatch(openModal());
      const resp = await axios(`baseURL/${products}`);

      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);
```
