import React from "react";

import { add } from "./features/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";
const App = () => {
  const input = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Hello world</h1>
      <input type="text" onChange={input} />
      <button type="submit" onClick={() => dispatch(add())}>Ok</button>
    </div>
  );
};

export default App;
