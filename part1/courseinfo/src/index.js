import React, { useState } from 'react'
import { createRoot } from 'react-dom/client';

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

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad;
  const average = (props.good * 1 + props.bad * -1) / total;
  const positivePercentage = (props.good * 100) / total;

  if(props.good !== 0 || props.neutral !== 0 || props.bad !== 0)
    return (
      <table>
        <tbody>
          <StatisticLine text="Good" value ={props.good} />
          <StatisticLine text="Neutral" value ={props.neutral} />
          <StatisticLine text="Bad" value ={props.bad} />
          <StatisticLine text="All" value ={total} />
          <StatisticLine text="Average" value ={average} />
          <StatisticLine text="Positive" value ={positivePercentage} />
        </tbody>
      </table>
    );
  
    return (
      <p>No feedback given</p>
    )
}

const App = (props) => {
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

  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const goodClick = () => {
    setGood(good + 1)
  }

  const neutralClick = () => {
    setNeutral(neutral + 1)
  }

  const badClick = () => {
    setBad(bad + 1)
  }

  const selectedClick = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const voteClick = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  }

  return (
    <div>
      <div>
        <Header course={course['name']} />
        <Content parts={course['parts']}/>
        <Total parts={course['parts']} />
      </div>

      <div>
        <h1>Give feedback</h1>

        <Button onClick={goodClick} text='Good' />
        <Button onClick={neutralClick} text='Neutral' />
        <Button onClick={badClick} text='Bad' />

        <h2>Statistics</h2>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>

      <div>
        <h1>Anecdote of the day</h1>
        <p>
          {props.anecdotes[selected]}<br/>
          Has {votes[selected]} votes
        </p>
        <p>
          <Button onClick={voteClick} text='Vote' />
          <Button onClick={selectedClick} text='Next anecdote' />
        </p>
      </div>
      <div>
        <h1>Anecote with most votes</h1>
        <p>
          {props.anecdotes[votes.indexOf(Math.max(...votes))]}
        </p>
      </div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const root = document.getElementById('root');
const reactRoot = createRoot(root);
reactRoot.render(<App anecdotes={anecdotes} />);