import "./List.css";
import { useState, useMemo, useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../App";

const List = () => {
  const todos = useContext(TodoContext);
  const [searchTxt, setSearchTxt] = useState("");
  const getAnalyzedData = () => {
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.done).length;
    const notDoneCount = totalCount - doneCount;
    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  };
  const { totalCount, doneCount, notDoneCount } = useMemo(getAnalyzedData, [
    todos,
  ]);

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <div>
        <div>total : {totalCount}</div>
        <div>done : {doneCount}</div>
        <div>not done : {notDoneCount}</div>
      </div>
      <input
        placeholder="검색어를 입력하세요🔍"
        value={searchTxt}
        onChange={(e) => {
          setSearchTxt(e.target.value);
        }}
      />
      <div className="todos-wrapper">
        {todos
          .filter((t) =>
            t.content.toLowerCase().includes(searchTxt.toLowerCase())
          )
          .map((t) => (
            <TodoItem todo={t} key={t.key} />
          ))}
      </div>
    </div>
  );
};

export default List;
