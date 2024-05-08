import { useReducer } from "react";

const actionMap = {
  INC: (state, data) => state + data,
  DEC: (state, data) => state - data,
};

function reducer(state, action) {
  if (!(action.type in actionMap)) {
    return state;
  }
  return actionMap[action.type](state, action.data);
}

const Exam = () => {
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1>{state}</h1>
      <button
        onClick={() => {
          dispatch({
            type: "INC",
            data: 1,
          });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "DEC",
            data: 1,
          });
        }}
      >
        -
      </button>
    </div>
  );
};

export default Exam;
