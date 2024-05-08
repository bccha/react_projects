import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Notfound from "./pages/Notfound";
import { getEmotionImage } from "./util/get-emotion-images";

// 1. '/' 모든 일기 조회 Home
// 2. '/new' 새로운 일기 작성
// 3. '/diary' 상세조회
// page도 component
function App() {
  const nav = useNavigate();
  return (
    <>
      <div>
        <img src={getEmotionImage("1")} />
        <img src={getEmotionImage("2")} />
        <img src={getEmotionImage("3")} />
        <img src={getEmotionImage("4")} />
        <img src={getEmotionImage("5")} />
      </div>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>
      </div>
      <button
        onClick={() => {
          nav("/new");
        }}
      >
        New로
      </button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
