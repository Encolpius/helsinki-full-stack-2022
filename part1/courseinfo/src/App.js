const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  const totalExercises = part1.exercises + part2.exercises + part3.exercises

  return (
    <>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total total={totalExercises} />
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

const Content = ({part1, part2, part3}) => {
  return (
    <>
      <Part title={part1.name} exercises={part1.exercises} />
      <Part title={part2.name} exercises={part2.exercises} />
      <Part title={part3.name} exercises={part3.exercises} />
    </>
  )
}

const Total = ({total}) => {
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