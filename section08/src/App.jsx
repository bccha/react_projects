import "./App.css";

import { useRef, useState } from "react";

import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";

function App() {
  const [todos, setTodos] = useState([]);
  const idRef = useRef(0);

  const addItem = (todo) => {
    const date = new Date();
    const newTodos = [
      ...todos,
      {
        key: idRef.current++,
        done: false,
        content: todo,
        date: date.toLocaleDateString(),
      },
    ];
    setTodos(newTodos);
  };

  const changeItem = (todo) => {
    setTodos(
      todos.map((t) => {
        if (t.key == todo.key) {
          t.done = todo.done;
        }
        return t;
      })
    );
  };

  const delItem = (key) => {
    const newTodos = todos.filter((i) => {
      return i.key != key;
    });
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <Header />
      <Editor addItem={addItem} />
      <List todos={todos} delItem={delItem} changeItem={changeItem} />
    </div>
  );
}

export default App;
