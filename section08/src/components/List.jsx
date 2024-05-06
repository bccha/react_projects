import "./List.css";
import { useState } from "react";
import TodoItem from "./TodoItem";

const List = ({ todos, delItem, changeItem }) => {
  const [searchTxt, setSearchTxt] = useState("");
  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
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
            <TodoItem
              todo={t}
              delItem={delItem}
              key={t.key}
              changeItem={changeItem}
            />
          ))}
      </div>
    </div>
  );
};

export default List;
