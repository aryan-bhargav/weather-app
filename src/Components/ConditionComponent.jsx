import React from 'react'
import { useWeather } from '../context/Weather'

function ConditionComponent(props) {
    const weather = useWeather();
  return (

    <div className='condition-component'>
        <div className='condition-name'>Wind</div>
        <img className='condition-component-img' src={props.img} alt="no img" />
      {/* Wind speed: {weather.data?.current?.wind_kph} */}
    <div className='condition-value'>{props.data}</div>
    <div className='condition-unit'>{props.unit}</div>
    <div></div>
    </div>
  )
}

export default ConditionComponent
