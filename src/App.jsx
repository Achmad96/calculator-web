import "./App.css";
import { useState } from "react";
import Keypad from "./components/keypad";

function App() {
  const [param, setParam] = useState("");
  const [keypads] = useState(["Del", "(", ")", "⇦", "+", "-", "X", "/", 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, ".", "="]);

  const handleBtn = v => {
    if (v === "Del") {
      setParam("");
    } else if (v === "⇦") {
      setParam(param.substring(0, param.length - 1));
    } else if (param.length >= 20) {
      return;
    } else if (v === "=") {
      try {
        const result = eval(param.replaceAll("X", "*"));
        setParam(result);
      } catch (e) {}
    } else {
      setParam(prev => prev + v);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="wrapper-results">
          <p className="param">{param}</p>
        </div>
        <div className="keypads">
          {keypads.map((v, i) => (
            <div key={v}>
              <Keypad className={`keypad-${i}`} click={e => handleBtn(e.target.value)} value={v} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
