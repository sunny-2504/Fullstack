import React from 'react'

const App = () => {
  // const course = 'Half Stack application development'
  const course = {
    name: 'Half Stack application development',
   parts : [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
}
  // const [part1, part2, part3] = parts

  return (
    <div>
      <Header course = {course.name}/>
      {/* <Content part1 = {parts[0]}  part2 = {parts[1]} part3 = {parts[2]} /> */}
      <Content parts = {course.parts}/>
      <Total parts = {course.parts}/>
    </div>
  )
}

const Header = (props) =>{
  console.log(props)
 
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )

}


const Content = (props) =>{
  console.log(props)
  
  return(
    <div>
      <Part1 Part1={props.parts[0]}/>
      <Part2 Part2={props.parts[1]}/>
      <Part3 Part3={props.parts[2]}/>
    </div>
  )

}

const Total = (props) => {
  return(
    <div>
      <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>

    </div>
  )

}
const Part1 = (props) =>{
  console.log(props)

  return(
    <div>
      <p>{props.Part1.name} {props.Part1.exercises}</p>
    </div>
  )

}
const Part2 = (props) =>{
  console.log(props)

  return(
    <div>
      <p>{props.Part2.name} {props.Part2.exercises}</p>
    </div>
  )

}
const Part3 = (props) =>{
  console.log(props)

  return(
    <div> 
      <p>{props.Part3.name} {props.Part3.exercises}</p>
    </div>
  )

}

export default App