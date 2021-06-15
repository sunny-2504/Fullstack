import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [diff, setDiff] = useState(0)
  
  const handleGoodCounter = () =>{
    setGood(good + 1)
    setAll(all + 1)
    setDiff(diff + 1)
  }

  const handleNeutralCounter = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }

  const handleBadCounter = () => {
    setBad(bad + 1)
    setAll(all + 1)
    setDiff(diff - 1)  
  }
  
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodCounter} text="good" />
      <Button handleClick={handleNeutralCounter} text="neutral" />
      <Button handleClick={handleBadCounter} text="bad" />
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral} </p>
      <p>bad {bad} </p>
      <p>all {all}</p>
      <p>average {diff/all}</p>
      <p>positive {good*100/all} %</p>
    </div>
  )
}


const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)



export default App
