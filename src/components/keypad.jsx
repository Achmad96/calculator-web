const Keypad = props => {
  const { className, value, click } = props;
  return (
    <button onClick={click} className={className} value={value}>
      {value}
    </button>
  );
};

export default Keypad;
