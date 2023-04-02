export default function Buttons({ display, setDisplay, buttonValue, result, setResult, activeValue, setActiveValue }) {

  const operators = ['AC', '+/-', '%', '/', 'x', '-', '+', '.', '=']
  const handleClick = (e) => {
    e.preventDefault();
    setActiveValue(e.target.value);
    const nextValue = e.target.value;
    setDisplay(nextValue);
    operators.includes(nextValue) ? setDisplay(eval(result).toString()) : setDisplay(result.concat(nextValue));
  }

  return (

    buttonValue === '=' ? <button type='button'
      className='buttons operators equal'
      value={buttonValue}
      onClick={handleClick}>{buttonValue}</button>
      : (operators.includes(buttonValue) ?
        <button type='button' className='buttons operators'
          value={buttonValue}
          onClick={handleClick}>{buttonValue}</button> :
        <button type='button' className='buttons' value={buttonValue}
          onClick={handleClick}>{buttonValue}</button>)

  )
}