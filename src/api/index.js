const BaseURL = import.meta.env.VITE_BASE_URL;

export const getWeatherDataForCity = async (city)=> {
    const response = await fetch(`${BaseURL}&q=${city}&aqi=no`);
    return await response.json();
}
export const getWeatherDataForLocation = async (lat,lon)=> {
    const response = await fetch(`${BaseURL}&q=${lat},${lon}&aqi=no`);
    return await response.json();
}