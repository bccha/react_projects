import useInput from "../hooks/useInput";

const HookExam = () => {
  const [input, onChange] = useInput();
  const [input1, onChange1] = useInput();
  return (
    <div>
      <input value={input} onChange={onChange} />
      <input value={input1} onChange={onChange1} />
    </div>
  );
};

export default HookExam;
