export default function Buttons({ display, setDisplay, buttonValue }) {

  const operators = ['AC', '+/-', '%', '/', 'x', '-', '+', '.', '='];

  const handleAC = () => {
    setDisplay('');
  };

  const handleSignChange = () => {
    setDisplay(prevDisplay => {
      const parts = prevDisplay.split(/([+\-/*x])/);

      const lastNumber = parts.pop();
      const sign = parts.pop();
      if (sign === '-'){
        const positiveNumber = parseFloat(lastNumber);
      return [...parts, positiveNumber.toString()].join('');
      }
      const changedSignNumber = ((-1 * parseFloat(lastNumber))).toString();
      return [...parts, changedSignNumber].join('');
    });
  };

  const handleEquals = () => {
    try {
      const result = eval(display.replace(/x/g, '*'));
      setDisplay(result.toString());
    } catch (error) {

      console.error(error);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    let nextValue = e.target.value;

    if (nextValue === 'AC'){
      handleAC();
    }
    else if (nextValue === '+/-') {
      handleSignChange();
    }
    else if (nextValue === '=') {
      handleEquals();
    }  else {
      if (['/', 'x', '-', '+', '%'].includes(nextValue)) {

        const lastChar = display.slice(-1);
        if (['/', 'x', '-', '+', '%'].includes(lastChar)) {

          setDisplay(display.slice(0, -1).concat(nextValue));
        } else {

          setDisplay(display.concat(nextValue));
        }
      } else {
        setDisplay(display.concat(nextValue));
      }
    }
  };

  const buttonClass = operators.includes(buttonValue)
  ? `buttons operators ${buttonValue === '=' ? 'equal' : ''}`
  : 'buttons';

  return (

    <button
    type="button"
    className={buttonClass}
    value={buttonValue}
    onClick={handleClick}
  >
    {buttonValue}
  </button>

  )
}