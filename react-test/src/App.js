import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  const toggleState = () => setToggle((prev) => !prev);

  useEffect(() => {
    setTimeout(() => {
      setData({});
    }, 100);
  });

  return (
    <div className="App">
      {toggle ? <div data-testId="toggle-elem">toggle</div> : null}
      {data && <div style={{ color: "red" }}>data</div>}
      <h1>Hello World</h1>
      <button data-testId="toggle-btn" onClick={toggleState}>
        Click me
      </button>
      <input type="text" placeholder="input value..." />
    </div>
  );
}

export default App;
