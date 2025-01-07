import "./App.css";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(10);

  return (
    <>
      <h1 className="text-blue-500 text-3xl font-bold">Nothing SERIOUS</h1>
      <h2>Counter Value = {value}</h2>
      <h3 className="text-blue-800 text-xl" onClick={() => {
        if (value < 20) setValue(value + 1)
      }}>
        Increase Value
      </h3>
      <button
        className="text-blue-800 text-xl"
        onClick={() => {
          if (value > 0) setValue(value - 1);
        }}
      >
        Decrease Value
      </button>
    </>
  );
}

export default App;
