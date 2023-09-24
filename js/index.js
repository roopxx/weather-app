import * as apiFunc from "./apiFunc.js";
import * as domFunc from "./domFunc.js";

let unitReload = false;
let lastCity = "chennai";

async function getWeatherData(initialLoad = false) {
  try {
    let nameOfCity;
    if (initialLoad) {
      nameOfCity = "chennai";
    } else {
      nameOfCity = apiFunc.getDataFromInput();
    }

    if (!nameOfCity) {
      return;
    }

    if (unitReload) {
      nameOfCity = lastCity;
    }

    lastCity = nameOfCity;

    const requestCityUrl = apiFunc.callRequestToWeatherAPI(nameOfCity);

    const weatherData = await apiFunc.getForecast(requestCityUrl);
    document.querySelector(".error-message").style.visibility = "hidden";
    domFunc.renderWeatherInfo(weatherData);

    unitReload = false;
  } catch (error) {
    document.querySelector(".error-message").style.visibility = "visible";
  }

  document.querySelector(".search-field").value = "";
}

getWeatherData(true);

const searchField = document.querySelector(".search-field");
const searchButton = document.querySelector(".search-icon");

searchButton.addEventListener("click", () => {
  getWeatherData();
});

searchField.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    getWeatherData();
  }
});
