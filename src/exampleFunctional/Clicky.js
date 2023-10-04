import { useState } from 'react'

const Clicky = () => {
    
  let [clicked, setClicked] = useState(0) 

  const clickHandlerUp = () => {
    setClicked(clicked + 1)
  }

  const clickHandlerDown = () => {
    setClicked(clicked - 1)
  }

  return (
    <>
        <h1>Button has been clicked {clicked} times</h1>
        <button onClick={clickHandlerUp}>up</button>
        <button onClick={clickHandlerDown}>down</button>
    </>
  )
}

export default Clicky;
