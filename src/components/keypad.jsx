const Keypad = props => {
  const { className, state, value } = props;
  const [param, setParam] = state;
  const handleBtn = key => {
    if (param.length > 0 && isNaN(parseFloat(key)) && param[param.length - 1] === key) {
      return;
    } else if (param.length > 0 && isNaN(parseFloat(param[param.length - 1])) && !param.endsWith(")") && isNaN(key) && key !== "backspace" && key !== "=" && key !== "clear") {
      return;
    } else if (param.length === 0 && isNaN(parseFloat(key)) && key !== "(") {
      return;
    }

    switch (key.toLowerCase()) {
      case "clear":
        setParam("");
        break;
      case "backspace":
        if (!param) return;
        setParam(prevParam => prevParam.toString().substring(0, param.length - 1));
        break;
      case "=":
        if (!param) return;
        try {
          const result = eval(param.replaceAll("x", "*"));
          setParam(result);
        } catch (e) {}
        break;
      default:
        setParam(prev => prev + key);
        break;
    }
  };

  return (
    <button onClick={e => handleBtn(e.target.value.toLowerCase())} className={className} value={value.toLowerCase()}>
      {value}
    </button>
  );
};

export default Keypad;
