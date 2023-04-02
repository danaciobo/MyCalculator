import ButtonList from "./ButtonList"
import Display from "./Display"
import { useState } from 'react'

export default function Frame() {

  const [result, setResult] = useState('0');
  const [display, setDisplay] = useState('')
  const [activeValue, setActiveValue] = useState('');

  return (

    <div className='frame'>
      <Display display={display} result={result} />
      <ButtonList setResult={setResult}
        activeValue={activeValue}
        setActiveValue={setActiveValue}
        result={result}
        display={display}
        setDisplay={setDisplay} />
    </div>
  )
}

