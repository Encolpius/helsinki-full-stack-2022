const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </>
  )
}

const Header = ({course}) => {
  return (
    <>
      <h1>{course.name}</h1>
    </>
  )
}

const Content = ({course}) => {
  const part1 = course.parts[0]
  const part2 = course.parts[1]
  const part3 = course.parts[2]

  return (
    <>
      <Part title={part1.name} exercises={part1.exercises} />
      <Part title={part2.name} exercises={part2.exercises} />
      <Part title={part3.name} exercises={part3.exercises} />
    </>
  )
}

const Total = ({course}) => {
  const exercises = course.parts.map(d => d.exercises).reduce((a,b) => a + b)
  return (
    <>
      <p>Number of exercises: {exercises}</p>
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