import { useState } from "react";

export const CounterHooks = () => {
  const [state, setState] = useState(0);
  return (
    <>
      <button onClick={() => setState(state - 1)}>-</button>
      <span>{state}</span>
      <button onClick={() => setState(state + 1)}>+</button>
    </>
  );
};
