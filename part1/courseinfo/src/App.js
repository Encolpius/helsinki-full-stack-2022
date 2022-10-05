const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      <Header course={course} />
      <Content part1={[part1, exercises1]} part2={[part2, exercises2]} part3={[part3, exercises3]} />
      <Total total={exercises1 + exercises2 + exercises3} />
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
      <Part title={part1[0]} exercises={part1[1]} />
      <Part title={part2[0]} exercises={part2[1]} />
      <Part title={part3[0]} exercises={part3[1]} />
    </>
  )
}

const Total = ({total}) => {
  return (
    <>
      <p>Number of exercises {total}</p>
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