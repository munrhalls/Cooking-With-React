import React, { useState } from "react";
import { CounterHooks } from "./components/CounterHooks";

export const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState("purple");
  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      <CounterHooks />
      <button
        onClick={() =>
          setTheme((prevTheme) => {
            return prevTheme === "purple" ? "blue" : "purple";
          })
        }
      >
        Toggle prevTheme
      </button>
    </ThemeContext.Provider>
  );
}

export default App;
