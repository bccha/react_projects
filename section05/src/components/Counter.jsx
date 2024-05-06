import { useState } from "react";
import Button from "./Button";

const Counter = () => {
  console.log("counter");
  const [count, setCount] = useState(0);
  return (
    <>
      <div>{count}</div>
      <Button
        text={"+"}
        onClick={() => {
          setCount(count + 1);
        }}
      ></Button>
    </>
  );
};

export default Counter;
