import Buttons from "./Button"

export default function ButtonsList({ display, setDisplay, setResult, result, activeValue, setActiveValue }) {
  const buttonValues = ['AC', '+/-', '%', '/',
    '7', '8', '9', 'x',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '=']
  return (
    <div className='button-grid'>
      {buttonValues.map((buttons, index) => {
        return (
          <Buttons key={index}
            setResult={setResult}
            activeValue={activeValue}
            setActiveValue={setActiveValue}
            buttonValue={buttons}
            result={result}
            display={display}
            setDisplay={setDisplay} />
        )
      })
      }
    </div>

  )
}