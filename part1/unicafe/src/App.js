import { useState } from 'react'

const App = () => {

  const [statistics, setStatistics] = useState({good: 0, neutral: 0, bad: 0, total: 0})

  const updateTotal = (statistic) => {
    const nextTotal = statistics.total + 1
    if (statistic === 'good') {
      setStatistics({ ...statistics, good: statistics.good + 1, total: nextTotal })
    } else if (statistic === 'neutral') {
      setStatistics({ ...statistics, neutral: statistics.neutral + 1, total: nextTotal })
    } else {
      setStatistics({ ...statistics, bad: statistics.bad + 1, total: nextTotal })
    }
  }

  const getAverage = () => {
    return (statistics.good - statistics.bad) / statistics.total || 0
  }

  const getPositive = () => {
    return (statistics.good / statistics.total) * 100 || 0
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => updateTotal('good')} text='good' />
      <Button handleClick={() => updateTotal('neutral')} text='neutral' />
      <Button handleClick={() => updateTotal('bad')} text='bad' />
      <h1>statistics</h1>
      <Statistics stats={statistics} average={getAverage()} positive={getPositive()} />
    </div>
  )
}

const Statistics = ({stats, average, positive}) => {
  if (stats.total === 0) {
    return (
      <>
        no feedback given
      </>
    )
  } else {
    return (
      <div>
        <table>
          <tbody>
            <StatisticsLine text='good' value={stats.good} />
            <StatisticsLine text='neutral' value={stats.neutral} />
            <StatisticsLine text='bad' value={stats.bad} />
            <StatisticsLine text='all' value={stats.total} />
            <StatisticsLine text='average' value={average} />
            <StatisticsLine text='positive' value={positive + '%'} />
          </tbody>
        </table>
      </div>
    )
  }
}

const StatisticsLine = ({text, value}) => {
  return (
    <>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </>
  )
}

const Button = ({handleClick, text}) => {
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  )
}

export default App