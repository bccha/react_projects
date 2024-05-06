import { useState } from "react";

const useInput = () => {
  const [input, setInput] = useState(0);
  const onChange = (e) => {
    setInput(e.target.value);
  };

  return [input, onChange];
};

export default useInput;
