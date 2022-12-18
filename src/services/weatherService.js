const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY
const BASE_URL = process.env.REACT_APP_OPENWEATHERMAP_BASE_URL

const getWeatherData = (infoType, searchParams) => {
     const url = new URL(BASE_URL + "/" + infoType)

     url.search = new URLSearchParams({ ...searchParams, appid:API_KEY })

     return fetch(url)
          .then((res) => res.json())
}

const formatCurrentWeather = (data) => {
     const {
          coord: {lat, lon},
          main: {temp, feels_like, temp_min, temp_max, humidity},
          name,
          dt,
          weather,
          sys: {country, sunrise, sunset},
          wind: {speed}
     } = data

     const {main: details, icon} = weather[0]

     return {lat, lon, temp, feels_like, temp_min, temp_max, humidity, name, dt, country, sunrise, sunset, details, icon, speed}
}

const getFormattedWeatherData = async (searchParams) => {
     const formattedCurrentWeather = await getWeatherData('weather', searchParams)
          .then(formatCurrentWeather)

          return formattedCurrentWeather
}

export default getFormattedWeatherData
