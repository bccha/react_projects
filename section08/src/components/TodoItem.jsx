import "./TodoItem.css";
import { memo, useContext } from "react";
import { TodoFnContext } from "../App";

const TodoItem = ({ todo }) => {
  const { changeItem, delItem } = useContext(TodoFnContext);
  return (
    <div className="TodoItem">
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => {
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

/*
export default memo(
  TodoItem,
  (curProps, nextProps) => curProps.todo.done === nextProps.todo.done
);
*/
export default memo(TodoItem);
