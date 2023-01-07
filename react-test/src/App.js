import { useState, useEffect } from "react";

import Users from "./users/Users";

function App() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState("");

  const toggleState = () => setToggle((prev) => !prev);

  useEffect(() => {
    setTimeout(() => {
      setData({});
    }, 100);
  });

  return (
    <div className="App">
      <h1 data-testId="value-elem">{value}</h1>
      {toggle ? <div data-testId="toggle-elem">toggle</div> : null}
      {data && <div style={{ color: "red" }}>data</div>}
      <h1>Hello World</h1>
      <button data-testId="toggle-btn" onClick={toggleState}>
        Click me
      </button>
      <input
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="input value..."
      />
      <Users />
    </div>
  );
}

export default App;
