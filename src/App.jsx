
import Card from './Components/Card'
import Input from './Components/Input'
import Button from './Components/Button'
import { useWeather } from './context/Weather'
import './App.css'
import { useEffect } from 'react'

function App() {
  const weather = useWeather();
  console.log(weather)

  useEffect(()=>{
    weather.fetchCurrentUserLocationData();
  },[])

  return (
    <div>
      <h1>Weather Forecast</h1>
      <div className='search-field'>
        <Input></Input>
        <Button onClick={weather.fetchData} text="Search"></Button>
      </div>

      <Card></Card>
      <Button onClick={weather.handleRefresh} text="Refresh"></Button>
    </div>
  )
}

export default App
