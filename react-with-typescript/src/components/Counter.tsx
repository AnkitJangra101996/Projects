import { useReducer, useState } from "react";

type StateType = {
  count: number;
};

type ActionType =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: number }
  | { type: "reset"; payload: number }
  | { type: "incrementByPayload"; payload: number };

const initialState: StateType = {
  count: 0,
};

const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };
    case "decrement":
      return { ...state, count: state.count - action.payload };
    case "reset":
      return { ...state, count: action.payload };
    case "incrementByPayload":
      return { ...state, count: state.count + action.payload };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputVal, setInputVal] = useState(0);
  const handleIncrementByPayload = () => {
    dispatch({ type: "incrementByPayload", payload: inputVal });
    setInputVal(0);
  };
  return (
    <>
      <div style={{ textAlign: "center" }}>
        Counter With UseReducer Hook In TypeScript
      </div>
      <main
        style={{
          minHeight: "100vh",
          minWidth: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#242424",
          color: "#f1f1f1",
        }}
      >
        <div>
          <h2>Count: {state.count}</h2>
          <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
            Increment
          </button>
          &nbsp;
          <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
            Decrement
          </button>
          &nbsp;
          <button onClick={() => dispatch({ type: "reset", payload: 0 })}>
            Reset
          </button>
          &nbsp;
          <br />
          <input
            type="number"
            onChange={(e) => setInputVal(+e.target.value)}
            value={inputVal}
          />
          <button onClick={handleIncrementByPayload}>
            Increment By {inputVal}
          </button>
          &nbsp;
        </div>
      </main>
    </>
  );
};

export default Counter;
