const Keypad = props => {
  const { className, state, value } = props;
  const [param, setParam] = state;
  const handleBtn = key => {
    switch (key.toLowerCase()) {
      case "clear":
        setParam("");
        break;
      case "⇦":
        if (!param) return;
        setParam(param.toString().substring(0, param.length - 1));
        break;
      case "=":
        if (!param) return;
        try {
          const result = eval(param.replaceAll("X", "*"));
          setParam(result);
        } catch (e) {}
        break;
      default:
        setParam(prev => prev + key);
        break;
    }
  };

  return (
    <button onClick={e => handleBtn(e.target.value)} className={className} value={value}>
      {value}
    </button>
  );
};

export default Keypad;
