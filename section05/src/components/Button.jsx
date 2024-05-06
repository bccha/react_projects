const Button = ({ text, color, onClick, children }) => {
  const onClickBtn = (e) => {
    console.log(e);
    console.log(text);
  };
  return (
    <button style={{ color: color }} onClick={onClick || onClickBtn}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: "None",
  color: "black",
};

export default Button;
