import { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../App";

export const CounterHooks = () => {
  const [state, setState] = useState(0);
  const style = useContext(ThemeContext);
  return (
    <>
      <button style={style} onClick={() => setState(state - 1)}>
        -
      </button>
      <span>{state}</span>
      <button style={style} onClick={() => setState(state + 1)}>
        +
      </button>
    </>
  );
};
