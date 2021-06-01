import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const Part1 = [part1, exercises1]
  const Part2 = [part2, exercises2]
  const Part3 = [part3, exercises3]
  return (
    <div>
      <Header course = {course}/>
      <Content Part1 = {Part1} Part2 = {Part2} Part3 = {Part3} />
      <Total exercises1 = {exercises1} exercises2 = {exercises2} exercises3 =  {exercises3}/>
    </div>
  )
}

const Header = (props) =>{
 
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )

}


const Content = (props) =>{
  return(
    <div>
      <Part1 Part1={props.Part1}/>
      <Part2 Part2={props.Part2}/>
      <Part3 Part3={props.Part3}/>


    </div>
  )

}

const Total = (props) => {
  return(
    <div>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>

    </div>
  )

}
const Part1 = (props) =>{

  return(
    <div>
      <p>{props.Part1}</p>
    </div>
  )

}
const Part2 = (props) =>{

  return(
    <div>
      <p>{props.Part2}</p>
    </div>
  )

}
const Part3 = (props) =>{

  return(
    <div>
      <p>{props.Part3}</p>
    </div>
  )

}

export default App