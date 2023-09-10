import "./App.css";
import { useState } from "react";
import Keypad from "./components/keypad";
import NumberFormat from "./utils/NumberFormat";

function App() {
  const [param, setParam] = useState("");
  return (
    <div className="App">
      <div className="container">
        <div className="result">{NumberFormat(param)}</div>
        <div className="keypads">
          <Keypad state={[param, setParam]} className="keypad-0" value="Clear" />
          <Keypad state={[param, setParam]} className="keypad-1" value="(" />
          <Keypad state={[param, setParam]} className="keypad-2" value=")" />
          <Keypad state={[param, setParam]} className="keypad-3" value="Backspace" />
          <Keypad state={[param, setParam]} className="keypad-4" value="+" />
          <Keypad state={[param, setParam]} className="keypad-5" value="-" />
          <Keypad state={[param, setParam]} className="keypad-6" value="X" />
          <Keypad state={[param, setParam]} className="keypad-7" value="/" />
          <Keypad state={[param, setParam]} className="keypad-8" value="%" />
          <Keypad state={[param, setParam]} className="keypad-9" value="9" />
          <Keypad state={[param, setParam]} className="keypad-10" value="8" />
          <Keypad state={[param, setParam]} className="keypad-11" value="7" />
          <Keypad state={[param, setParam]} className="keypad-12" value="6" />
          <Keypad state={[param, setParam]} className="keypad-13" value="5" />
          <Keypad state={[param, setParam]} className="keypad-14" value="4" />
          <Keypad state={[param, setParam]} className="keypad-15" value="3" />
          <Keypad state={[param, setParam]} className="keypad-16" value="2" />
          <Keypad state={[param, setParam]} className="keypad-17" value="1" />
          <Keypad state={[param, setParam]} className="keypad-18" value="0" />
          <Keypad state={[param, setParam]} className="keypad-19" value="." />
          <Keypad state={[param, setParam]} className="keypad-20" value="=" />
        </div>
      </div>
    </div>
  );
}

export default App;
