import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
    completedTodo: (state, action) => {
      const toggle = state.todos.find((todo) => todo.id === action.payload);
      if (toggle) {
        toggle.completed = !toggle.completed;
      }
    },
  },
});
export const { addTodo,removeTodo,setTodos,completedTodo } = todosSlice.actions;

export default todosSlice.reducer;
