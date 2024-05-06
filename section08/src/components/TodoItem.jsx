import "./TodoItem.css";
import { useState } from "react";

const TodoItem = ({ todo, delItem, changeItem }) => {
  return (
    <div className="TodoItem">
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => {
          todo.done = !todo.done;
          changeItem(todo);
        }}
      />{" "}
      <div className="content">{todo.content}</div>
      <div className="date"> {todo.date}</div>
      <button
        onClick={() => {
          delItem(todo.key);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
