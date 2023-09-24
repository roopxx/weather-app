function getDataFromInput() {
  const input = document.querySelector(".search-field");
  const nameOfCity = input.value;

  return nameOfCity;
}

function callRequestToWeatherAPI(nameOfCity) {
  return `https://api.weatherapi.com/v1/forecast.json?key=0853c2285eee451fabf83036231709&q=${nameOfCity}&aqi=yes`;
}

async function getForecast(url) {
  const response = await fetch(url, {
    mode: "cors",
  });
  const forecastData = await response.json();
  console.log(forecastData);
  return forecastData;
}

export { getDataFromInput, callRequestToWeatherAPI, getForecast };
