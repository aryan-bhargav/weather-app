import React from 'react'
import { useWeather } from '../context/Weather'
import ConditionComponent from './ConditionComponent';

import windImage from '../assets/wind.png';  // Correct way to import from 'src/assets'
import humidityImage from '../assets/humidity.png';  // Correct way to import from 'src/assets'
import pressureImage from '../assets/pressure.png';  // Correct way to import from 'src/assets'
import uvImage from '../assets/uv.png';  // Correct way to import from 'src/assets'


function Card() {
  const weather = useWeather();
  return (<>
    <div className='card'>
      <img className='weather-icon' src={weather.data?.current?.condition.icon} alt="" />
      <h2>{weather.data?.current?.condition.text}</h2>
      <h2>{weather.data?.current?.temp_c} °C</h2>
      <h5>{weather.data?.location?.region}</h5>
    </div>

    <div className='current-conditions'>
      <ConditionComponent img={windImage} data={weather.data?.current?.wind_kph} conditionName="Wind" unit="Km/h" />
      <ConditionComponent img={humidityImage} data={weather.data?.current?.humidity} conditionName="Humidity" unit="%" />
      <ConditionComponent img={pressureImage} data={weather.data?.current?.pressure_mb} conditionName="Pressure" unit="mBar" />
      <ConditionComponent img={uvImage} data={weather.data?.current?.uv} conditionName="UV" unit="Low" />
    </div>
  </>
  )
}

export default Card
