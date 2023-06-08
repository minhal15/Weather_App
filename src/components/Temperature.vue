<script>
const API_KEY = "8f5c955637aca14b1f19ed99570ebb9d";//Make secret
const LOCATION_URL = 'http://api.openweathermap.org/geo/1.0/direct?q='
const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?units=metric&'

export default {
  data: () => ({
    weather: {}
  }),
  created() {
    this.getTemp('Paris, Ontario, Canada')
  },
  methods: {
    async getTemp(location) {
      let response1 = await (await fetch(LOCATION_URL + location + '&appid=' + API_KEY)).json()
      let lat = response1[0].lat
      let lon = response1[0].lon
      let response2 = await (
        await fetch(WEATHER_URL + 'lat=' + lat + '&lon=' + lon + '&appid=' + API_KEY)
      ).json()
      this.weather[location] = response2.main.temp
    }
  }
}
</script>

<template>
  <div v-for="(temp, location) in weather">The temperature in {{ location }} is {{ temp }}c</div>
</template>
