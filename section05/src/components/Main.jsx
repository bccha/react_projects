// 함수 컴포넌트
// 중괄호 안에는 표현식만 가능.Expression only
// 숫자 문자 배열만 표시 가능
// 모든 태그는 닫혀야 한다.
// 최상위 Tag는 하나여야 한다.

import "./Main.css";

const Main = () => {
  const user = {
    name: "Jeff",
    isLogin: true,
  };
  return (
    <>
      {user.isLogin ? (
        // <div style={{ backgroundColor: "red", borderBottom: "5px solid blue" }}>
        <div className="logout">로그아웃</div>
      ) : (
        <div>로그인</div>
      )}
    </>
  );
};

export default Main;
