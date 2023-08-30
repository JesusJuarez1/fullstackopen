import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const Statistics = (props) => (
  <div>
    <p>Good {props.good}</p>
    <p>Neutral {props.neutral}</p>
    <p>Bad {props.bad}</p>
  </div>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodClick = () => {
    setGood(good + 1)
  }

  const neutralClick = () => {
    setNeutral(neutral + 1)
  }

  const badClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give feedback</h1>

      <Button onClick={goodClick} text='Good' />
      <Button onClick={neutralClick} text='Neutral' />
      <Button onClick={badClick} text='Bad' />

      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)





/*import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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

  return (
    <div>
      <Header course={course['name']} />
      <Content parts={course['parts']}/>
      <Total parts={course['parts']} />
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part part={props.parts[2].name} exercises={props.parts[2].exercises} />
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))*/