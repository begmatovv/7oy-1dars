import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    add: (state) => {
      console.log(state);
    },
  },
});
export const { add } = counterSlice.actions;

export default counterSlice.reducer;
