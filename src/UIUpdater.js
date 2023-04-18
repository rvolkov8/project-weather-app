import dateFactory from './date';
import weatherDataProcessorFactory from './weatherDataProcessor';
import loadingIndicatorFactory from './loadingIndicator';

export default function UIUpdaterFactory() {
  const loadingIndicator = loadingIndicatorFactory();
  const dateObj = dateFactory();
  const weatherDataProcessor = weatherDataProcessorFactory();

  const searchInputElement = document.querySelector('#search');

  const date = document.querySelector('.date');
  const locationPlace = document.querySelector('.location-place');
  const temperatureNumber = document.querySelector('.temperature-number');
  const weatherCondition = document.querySelector('.weather-condition');
  const weatherIcon = document.querySelector('.weather-icon');
  const feelsLikeTemperature = document.querySelector(
    '.feels-like-temperature'
  );
  const humidityPercent = document.querySelector('.humidity-percent');
  const windSpeed = document.querySelector('.wind-speed');

  const clearUserInput = () => {
    searchInputElement.value = '';
  };

  const updateWeather = async () => {
    loadingIndicator.show();
    date.textContent = dateObj.getFormattedDate();
    locationPlace.textContent = await weatherDataProcessor.getLocation();
    temperatureNumber.textContent =
      await weatherDataProcessor.getTemperatureCelsius();
    weatherCondition.textContent =
      await weatherDataProcessor.getWeatherCondition();
    weatherIcon.src = await weatherDataProcessor.getWeatherIcon();
    feelsLikeTemperature.textContent =
      await weatherDataProcessor.getFeelsLikeCelsius();
    humidityPercent.textContent = await weatherDataProcessor.getHumidity();
    windSpeed.textContent = await weatherDataProcessor.getWindSpeedKph();
    loadingIndicator.hide();
    clearUserInput();
  };

  return { updateWeather };
}
