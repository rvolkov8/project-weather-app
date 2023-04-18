import dateFactory from './date';
import weatherDataProcessorFactory from './weatherDataProcessor';
import loadingIndicatorFactory from './loadingIndicator';

export default function UIUpdaterFactory() {
  const loadingIndicator = loadingIndicatorFactory();
  const dateObj = dateFactory();
  const weatherDataProcessor = weatherDataProcessorFactory();
  let currentTemperature = 'c';

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

  let temperatureNumberFahrenheit;
  let feelsLikeFahrenheit;
  let temperatureNumberCelsius;
  let feelsLikeCelsius;

  const clearUserInput = () => {
    searchInputElement.value = '';
  };

  const updateWeather = async () => {
    loadingIndicator.show();

    temperatureNumberFahrenheit =
      await weatherDataProcessor.getTemperatureFahrenheit();
    feelsLikeFahrenheit = await weatherDataProcessor.getFeelsLikeFahrenheit();
    temperatureNumberCelsius =
      await weatherDataProcessor.getTemperatureCelsius();
    feelsLikeCelsius = await weatherDataProcessor.getFeelsLikeCelsius();

    date.textContent = dateObj.getFormattedDate();
    locationPlace.textContent = await weatherDataProcessor.getLocation();
    if (currentTemperature === 'c') {
      temperatureNumber.textContent = temperatureNumberCelsius;
      feelsLikeTemperature.textContent = feelsLikeCelsius;
    } else if (currentTemperature === 'f') {
      temperatureNumber.textContent = temperatureNumberFahrenheit;
      feelsLikeTemperature.textContent = feelsLikeFahrenheit;
    }
    weatherCondition.textContent =
      await weatherDataProcessor.getWeatherCondition();
    weatherIcon.src = await weatherDataProcessor.getWeatherIcon();
    humidityPercent.textContent = await weatherDataProcessor.getHumidity();
    windSpeed.textContent = await weatherDataProcessor.getWindSpeedKph();
    loadingIndicator.hide();

    clearUserInput();
  };

  const toggleTemperature = () => {
    if (currentTemperature === 'c') {
      temperatureNumber.textContent = temperatureNumberFahrenheit;
      feelsLikeTemperature.textContent = feelsLikeFahrenheit;
      currentTemperature = 'f';
    } else if (currentTemperature === 'f') {
      temperatureNumber.textContent = temperatureNumberCelsius;
      feelsLikeTemperature.textContent = feelsLikeCelsius;
      currentTemperature = 'c';
    }
  };

  return { updateWeather, toggleTemperature };
}
