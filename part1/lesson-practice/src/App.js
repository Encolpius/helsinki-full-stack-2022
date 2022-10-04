const Hello = (props) => {
  return (
    <>
      <p>Hello {props.name}, you are {props.age} years old.</p>
    </>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href="https://github.com/mluukkai">mluukkai</a>
    </div>
  )
}

const App = () => {
  const name = 'Alexi'
  const age = 37
  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Andy" age={age} />
      <Hello name={name} age={32} />
      <Footer />
    </>
  )
}

export default App