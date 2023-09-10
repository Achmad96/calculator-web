import "./App.css";
import { useState, useRef } from "react";
import Keypad from "./components/keypad";
import NumberFormat from "./utils/NumberFormat";
import { motion } from "framer-motion";

function App() {
  const [param, setParam] = useState("");
  const [selected, setSelected] = useState({ name: "tes" });
  const [keypads] = useState(["Del", "(", ")", "⇦", "+", "-", "X", "/", 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, ".", "="]);
  const ref = useRef(null);

  const handleBtn = v => {
    if (v === "Del") {
      setParam("");
    } else if (v === "⇦") {
      setParam(param.substring(0, param.length - 1));
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
        <div className="wrapper-results">{NumberFormat(param)}</div>
        <div className="keypads">
          {keypads.map((v, i) => (
            <div key={v}>
              <motion.div
                ref={ref}
                animate={{ scale: selected[v] ? 1.05 : 1 }}
                transition={{ duration: 0.3 }}
                onClick={() => {
                  setSelected({ [v]: i });
                  setTimeout(() => {
                    setSelected({ [v]: undefined });
                  }, 500);
                }}>
                <Keypad className={`keypad-${i}`} click={e => handleBtn(e.target.value)} value={v} />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
