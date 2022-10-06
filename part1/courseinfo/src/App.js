const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name:'Fundamentals of React',
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

  return (
    <>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </>
  )
}

const Header = ({course}) => {
  return (
    <>
      <h1>{course}</h1>
    </>
  )
}

const Content = ({parts}) => {
  const part1 = parts[0]
  const part2 = parts[1]
  const part3 = parts[2]
  
  return (
    <>
      <Part title={part1.name} exercises={part1.exercises} />
      <Part title={part2.name} exercises={part2.exercises} />
      <Part title={part3.name} exercises={part3.exercises} />
    </>
  )
}

const Total = ({parts}) => {
  const total = parts.map(d => d.exercises).reduce((a,b) => a + b)
  return (
    <>
      <p>Number of exercises: {total}</p>
    </>
  )
}

const Part = ({title, exercises}) => {
  return (
    <>
      <p>{title}: {exercises}</p>
    </>
  )
}

export default App