import { TodoFnContext } from "../App";
import "./Editor.css";
import { useRef, useState, useContext } from "react";

const Editor = () => {
  const { addItem } = useContext(TodoFnContext);
  const [newItem, setNewItem] = useState("");
  const currentRef = useRef();

  const onSubmit = () => {
    currentRef.current.focus();
    if (newItem == "") {
      return;
    }
    addItem(newItem);
    setNewItem("");
  };

  return (
    <div className="Editor">
      <input
        ref={currentRef}
        placeholder="Input Todo"
        value={newItem}
        onChange={(e) => {
          setNewItem(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.keyCode == 13) {
            onSubmit();
          }
        }}
      />
      <button onClick={onSubmit}>Add..</button>
    </div>
  );
};

export default Editor;
