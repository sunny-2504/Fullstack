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
      <Statistics good ={good} neutral = {neutral} bad = {bad} all = {all} diff = {diff} />
    </div>
  )
}


const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = (props) => {
  if(props.all === 0){
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <table>
        <tbody>
        
        
      <Statistic text="good" value={props.good} />
      
      <Statistic text="neutral" value={props.neutral} />
      <Statistic text="bad" value={props.bad} />
      <Statistic text="all" value={props.all} />
      <Statistic text="average" value={props.diff/props.all} />
      <Statistic text="positive" value={props.good*100/props.all}  />
      
      </tbody>
      </table>
    </div>
  )

}

const Statistic = (props) => {
  const text = props.text
  if(text === 'positive') {
    return (
      <tr>
      <td>{text}     </td>
      <td> {props.value} % </td>
      </tr>
    )
  }
  return (
    <tr>
    <td>{text}     </td> 
    <td> {props.value}</td>
    </tr>
  )

}



export default App