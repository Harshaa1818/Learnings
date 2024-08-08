import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "./redux/slices/TodoSlice";

function Addtodo() {
  const [data, setData] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  return (
    <form>
      <div>
        Add Todos: <input onChange={(e) => setData(e.target.value)} />
        <button onClick={() => dispatch(addTodo(data))}> Submit</button>
      </div>
      <div>
        {todos.map((todo) => (
          <li key={todo.id}>
            Title: {todo.name}
          </li>
        ))}
      </div>
    </form>
  );
}

export default Addtodo;
