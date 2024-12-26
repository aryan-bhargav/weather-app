const BaseURL = "https://api.weatherapi.com/v1/current.json?key=88e4189592884e33ae884409242512";

export const getWeatherDataForCity = async (city)=> {
    const response = await fetch(`${BaseURL}&q=${city}&aqi=no`);
    return await response.json();
}
export const getWeatherDataForLocation = async (lat,lon)=> {
    const response = await fetch(`${BaseURL}&q=${lat},${lon}&aqi=no`);
    return await response.json();
}