import React, { useState, useEffect } from "react";
import {
  addTodo,
  removeTodo,
  completedTodo,
  setTodos,
} from "./features/todo/todoSlice";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaTrash } from "react-icons/fa";

function App() {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      dispatch(setTodos(savedTodos));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(
        addTodo({
          id: uuidv4(),
          text,
          title,
          completed: false,
        })
      );
      toast.success("Todo added successfully");
    } else {
      toast.error("Please type something");
    }

    setText("");
    setTitle("");
  };
  function isCompleted() {
    completedTodo;
  }

  return (
    <div className="align-el">
      <h1 className="text-3xl font-bold mb-4 text-center">Todo List</h1>
      <form onSubmit={handleSubmit} className="mb-4 text-center">
        <input
          className="input input-bordered w-full max-w-xs"
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <button className="btn btn-primary">Add</button>
      </form>

      <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {todos.map((todo) => (
          <li
            className={`card lg:w-96 bg-base-100 shadow-2xl ${
              todo.completed ? "opacity-50" : ""
            }`}
            key={todo.id}
          >
            <div className="flex justify-between">
              <h4 className="p-5">{todo.text}</h4>
              <input
                type="checkbox"
                defaultChecked={isCompleted}
                className=" mr-5"
              />
            </div>

            <button
              className="btn "
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              <FaTrash />
            </button>
          </li>
        ))}
      </ul>

      <ToastContainer />
    </div>
  );
}

export default App;
