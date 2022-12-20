# Weather App Built with React JS using OpenWeatherMap API

This project was built to fetch and display the weather data for a city. You can search for a city, select a predefined city, or share your current geolocation giving permission from your browser.

This weather app will display the following:
- Location date
- Location time
- Weather status
- Current temperature
- Real feel
- Humidity
- Wind speed
- Sunrise time
- Sunset time
- Highest temperature for the day
- Lowest temperature for the day
- Hourly Forecast
- Daily Forecast
- Unit Conversion (°C or °F)

In order to fetch the weather data, you will need to register an account with [OpenWeatherMap](https://openweathermap.org/) and create an API key. This app uses their One Call API 3.0 which provides 1,000 API calls per day for free.

This project also imports the following packages:
- [Tailwind CSS: A utility-first CSS framework that can be composed to build any design, directly in your markup ](https://tailwindcss.com/)
<pre>
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p 
</pre>

- [Unicons: Free Icon Fonts and SVG Icons](https://iconscout.com/unicons)
<pre>npm install --save @iconscout/unicons</pre>

- [Luxon: A powerful, modern, and friendly wrapper for JavaScript dates and times](https://moment.github.io/luxon/#/)
<pre>npm i luxon</pre>

- [React Toastify: Add notifications to your app with ease](https://www.npmjs.com/package/react-toastify)
<pre>npm i react-toastify</pre>

You will need to create a .env file and add the following:
<pre>
REACT_APP_OPENWEATHERMAP_API_KEY = "your-openweathermap-api-key"
REACT_APP_OPENWEATHERMAP_BASE_URL = "https://api.openweathermap.org/data/2.5"
</pre>

After you do this, run <pre>npm start</pre>

Please note that if you would like to share your geolocation to fetch the weather for your current city, remember to allow permission from your browser to share location. None of your information are being stored anywhere and doesn't require a database.




