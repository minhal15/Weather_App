<template>
    <div>
      <h1>Weather Forecast</h1>
      <div v-for="forecast in forecasts" :key="forecast.dt">
        <p>Temperature: {{ forecast.main.temp }}°C</p>
        <p>Weather: {{ forecast.weather[0].description }}</p>
        <p>Time: {{ formatTime(forecast.dt) }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        forecasts: []
      };
    },
    mounted() {
      this.fetchWeather();
    },
    methods: {
      fetchWeather() {
        const apikey = "8f5c955637aca14b1f19ed99570ebb9d";
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=London,ON,CA&appid=${apikey}&units=metric`;
        fetch(url)
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then((data) => {
            this.forecasts = data.list.slice(0, 3);
          })
          .catch((error) => {
            console.log(error);
          });
      },
      formatTime(dt) {
        const date = new Date(dt * 1000);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? "PM" : "AM";
        return `${hours % 12}:${minutes.toString().padStart(2, "0")} ${ampm}`;
      },
    },
  };
  </script>
  