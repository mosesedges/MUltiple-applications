import React,{useState} from 'react'

const Timer = () => {
const [count, setCount] = useState(0)

const handleClick = () => {

  setTimeout(() => {
    setCount(prev => prev + 1)
  }, 5000);
  
}

  return (
    <div>
      <h1 data-testid= 'count'>{count}</h1>
      <button data-testid='btnUp' onClick={() => handleClick()}>Increment</button>
      <button data-testid='btnDown' onClick={() => setCount(count - 1)}>Decrement</button>
      <button data-testid='btnReset' onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

export default Timer
