import React from 'react'
import { useWeather } from '../context/Weather'


function Input(props) {
    const weather = useWeather();
    console.log(weather);
    return (
        <div>
            <input className='input'
                
                placeholder='Seach City'
                value={weather.searchCity}
                onChange={(e)=>{
                    weather.setSearchCity(e.target.value);
                }} />
        </div>
    )
}

export default Input
