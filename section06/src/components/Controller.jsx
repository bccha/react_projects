const getButtons = (onChange) => {
  const offset = ["-1", "-10", "-100", "+100", "+10", "+1"];
  return offset.map((item, i) => {
    return (
      <button
        key={i}
        onClick={(e) => {
          onChange(Number(e.target.textContent));
        }}
      >
        {item}
      </button>
    );
  });
};

const Controller = ({ onChange }) => {
  return <div>{getButtons(onChange)}</div>;
};

export default Controller;
