import "./App.css";

import {
  useRef,
  useState,
  useReducer,
  useCallback,
  createContext,
  useMemo,
} from "react";

import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";
//import Exam from "./components/Exam";

const actionMap = {
  add: (todo, data) => [
    ...todo,
    { ...data, done: false, date: new Date().toDateString() },
  ],

  change: (todo, data) =>
    todo.map((t) => {
      if (t.key == data) {
        return { ...t, done: !t.done };
      }
      return t;
    }),

  del: (todo, data) => todo.filter((t) => t.key != data),
};

const todoReducer = (todos, action) => {
  if (!(action.action in actionMap)) {
    return todos;
  }
  return actionMap[action.action](todos, action.data);
};

export const TodoContext = createContext();
export const TodoFnContext = createContext();

function App() {
  const [todos, dispatchTodos] = useReducer(todoReducer, []);
  const idRef = useRef(0);

  const addItem = useCallback((todo) => {
    dispatchTodos({
      action: "add",
      data: {
        key: idRef.current++,
        content: todo,
      },
    });
  }, []);

  const changeItem = useCallback((todo) => {
    dispatchTodos({
      action: "change",
      data: todo.key,
    });
  }, []);

  const delItem = useCallback((key) => {
    dispatchTodos({
      action: "del",
      data: key,
    });
  }, []);

  const memoDispatch = useMemo(() => {
    return { addItem, changeItem, delItem };
  }, []);

  return (
    <div className="App">
      {/*
      <Exam />
      */}
      <Header />
      <TodoContext.Provider value={todos}>
        <TodoFnContext.Provider value={memoDispatch}>
          <Editor />
          <List />
        </TodoFnContext.Provider>
      </TodoContext.Provider>
    </div>
  );
}

export default App;
