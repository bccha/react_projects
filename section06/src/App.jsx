import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";

import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("count changed", count);
  }, [count]);
  const onChange = (diff) => {
    setCount(count + diff); // async function. useEffect 함수에서 변경 완료된 값을 얻어올 수 있음.
  };
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller onChange={onChange} />
      </section>
    </div>
  );
}

export default App;
