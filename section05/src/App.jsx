import "./App.css";
import Button from "./components/Button";
import Bulb from "./components/Bulb";
import Counter from "./components/Counter";
import Register from "./components/Register";
import HookExam from "./components/HookExam";

function App() {
  const redProps = {
    text: "메일",
    color: "red",
  };
  return (
    <>
      <HookExam />
      <Bulb />
      <Counter />
      <Register />
    </>
  );
}

export default App;
