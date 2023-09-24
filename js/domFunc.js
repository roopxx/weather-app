let tempUnit = " °C";

function renderWeatherInfo(weatherData) {
  const condition = document.querySelector(".condition");
  condition.textContent = weatherData.current.condition.text;

  const place = document.querySelector(".place");
  place.textContent = weatherData.location.name;

  const country = document.querySelector(".country");
  country.textContent = weatherData.location.country;

  const dateField = document.querySelector(".date");
  const timeField = document.querySelector(".time");
  const dateData = weatherData.location.localtime;
  formatter(dateData, dateField, timeField);

  const feelsLike = document.querySelector(".feel");
  feelsLike.textContent = weatherData.current.feelslike_c + tempUnit;

  const humidity = document.querySelector(".humidity");
  humidity.textContent = weatherData.current.humidity + " %";

  const chanceOfRain = document.querySelector(".rain");
  chanceOfRain.textContent =
    weatherData.forecast.forecastday[0].day.daily_chance_of_rain + " %";

  const windSpeed = document.querySelector(".wind");
  windSpeed.textContent = weatherData.current.wind_kph + " Kmph";

  const temperature = document.querySelector(".temperature");
  temperature.textContent = weatherData.current.temp_c + tempUnit;
  imageLoader();
}

function formatter(dateData, dateField, timeField) {
  const dateFormatter = Intl.DateTimeFormat("en-us", { dateStyle: "full" });
  const timeFormatter = Intl.DateTimeFormat("en-us", { timeStyle: "short" });

  let date = new Date(dateData);
  let time = new Date(dateData).getTime();

  dateField.textContent = dateFormatter.format(date);
  timeField.textContent = timeFormatter.format(time);
}

function imageLoader() {
  const image = document.querySelector(".image");
  const condition = document.querySelector(".condition");

  const currentWeather = condition.textContent;
  console.log("condition:", currentWeather);
  // weather-icon-pack/partly-cloudy.png
  if (currentWeather.includes("Sunny")) {
    image.src = "weather-icon-pack/sun.png";
  } else if (currentWeather.includes("cloudy")) {
    image.src = "weather-icon-pack/partly-cloudy.png";
  } else if (currentWeather.includes("Patchy rain possible")) {
    image.src = "weather-icon-pack/rain-cloud.png";
  } else if (currentWeather.includes("sleet")) {
    image.src = "weather-icon-pack/sleet.png";
  } else if (
    currentWeather.includes("Mist") ||
    currentWeather.includes("Fog")
  ) {
    image.src = "weather-icon-pack/fog.png";
  } else if (
    currentWeather.includes("thunder") ||
    currentWeather.includes("Thunder")
  ) {
    image.src = "weather-icon-pack/storm.png";
  } else if (
    currentWeather.includes("Light rain") ||
    currentWeather.includes("light rain") ||
    currentWeather.includes("drizzle")
  ) {
    image.src = "weather-icon-pack/slight-rain.png";
  } else if (
    currentWeather.includes("Heavy rain") ||
    currentWeather.includes("heavy rain") ||
    currentWeather.includes("Torrential rain")
  ) {
    image.src = "weather-icon-pack/heavy-rain.png";
  } else if (
    currentWeather.includes("snow") ||
    currentWeather.includes("Blizzard")
  ) {
    image.src = "weather-icon-pack/snow.png";
  } else {
    image.src = "weather-icon-pack/rain.png";
  }
}

export { renderWeatherInfo, formatter };
