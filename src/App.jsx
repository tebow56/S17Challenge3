import { useState } from 'react'
import TemperatureDisplay from './components/TemperatureDisplay.jsx'
import './App.css'
import TemperatureControls from './components/TemperatureControls.jsx'
import HistoryList from './components/HistoryList.jsx'


function App() {
  const [temperature, setTemperature] = useState(20)
  const getTime = () => {
    const now = new Date()
    const hour = now.getHours()
    const minute = now.getMinutes()
    const second = now.getSeconds()
    return `${hour}:${minute}:${second}`
  }

  const [time, setTime] = useState(getTime())
    
  const increaseTemperature = () => {
    setTemperature(temperature + 1)
    saveTemperature(temperature + 1, time)
  }

  const decreaseTemperature = () => {
    setTemperature(temperature - 1)
    saveTemperature(temperature - 1, time)
  }

  const resetTemperature = () => {
    setTemperature(20)
    saveTemperature(20, time)
  }

  const saveTemperature = (temp, time) => {
    const storedhistory = JSON.parse(localStorage.getItem('history')) || []
    const newhistory = `${temp}ºC - ${time}`
    storedhistory.push(newhistory)
    localStorage.setItem('history', JSON.stringify(storedhistory))
    

  }

  return (
    <>
      <h1>Control de temperatura</h1>
      <TemperatureDisplay temperature={temperature} />
      <TemperatureControls increaseTemperature={increaseTemperature}
      decreaseTemperature={decreaseTemperature}
      resetTemperature={resetTemperature}/>
      <HistoryList />
    </>
  )
}

export default App
