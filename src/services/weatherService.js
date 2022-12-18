import { DateTime } from "luxon"

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

const formatForecastWeather = (data) => {
     let { timezone, daily, hourly } = data
     // show five daily forecast
     daily = daily.slice(1, 6).map(d => {
          return {
               title: formatToLocalTime(d.dt, timezone, 'ccc'),
               temp: d.temp.day,
               icon: d.weather[0].icon
          }
     })

     // show five hourly forecast
     hourly = hourly.slice(1, 6).map(h => {
          return {
               title: formatToLocalTime(h.dt, timezone, 'hh:mm a'),
               temp: h.temp.day,
               icon: h.weather[0].icon
          }
     })

     return { timezone, daily, hourly }
}

const getFormattedWeatherData = async (searchParams) => {
     const formattedCurrentWeather = await getWeatherData('weather', searchParams)
          .then(formatCurrentWeather)

          const {lat, lon} = formattedCurrentWeather

          const formattedForecastWeather = await getWeatherData('onecall', {
               lat,
               lon,
               exclude: 'current,minutely,alerts',
               units: searchParams.units
          }).then(formatForecastWeather)

     return { ...formattedCurrentWeather, ...formattedForecastWeather }
}

const formatToLocalTime = (secs, zone, format = "ccc, LLL dd yyyy' | Local time: 'hh:mm a") =>
     DateTime.fromSeconds(secs)
          .setZone(zone)
          .toFormat(format)

const iconUrlFromCode = (code) => `http://openweathermap.org/img/wn/${code}@2x.png`

export default getFormattedWeatherData

export { formatToLocalTime, iconUrlFromCode }
