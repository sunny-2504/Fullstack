import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]

  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0)) 
  const [selected, setSelected] = useState(0)
  

  const handleclick = () =>{
    if(selected === anecdotes.length - 1){
      setSelected(0)
    }
    else
      setSelected(selected + 1)
  }


  const vote = () => {
   const votes = [...points]
   votes[selected] += 1
  //  console.log(votes)
   setPoints(votes)
  }
  // console.log(selected)
  const maxVote = points.reduce(
    (acc, num, idx) => {
      if (num > acc.num) {
        acc.num = num;
        acc.idx = idx;
      }
  
      return acc;
    },
    { num: 0 }
  );
  const maxVotedAnecdote = anecdotes[maxVote.idx];
  

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <button onClick={vote}>vote</button>
      <button onClick={handleclick}>next anecdote</button>
      <h2>Anecdote with most votes</h2>
      <Display maxVotedAnecdote={maxVotedAnecdote} maxVote={maxVote} />
    </div>
  )
}

const Display = (props) => {
  if (props.maxVote.num === 0){
    return (
      <p>All anecdotes have 0 votes</p>
    )
  }
  return (
    <div>
    <p>{props.maxVotedAnecdote}</p>
    <p>has {props.maxVote.num} votes </p>
    </div>
  ) 

}





export default App;
