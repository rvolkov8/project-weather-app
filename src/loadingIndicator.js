export default function loadingIndicatorFactory() {
  const spin = document.querySelector('.spin');
  const locationPlace = document.querySelector('.location-place');
  const date = document.querySelector('.date');
  const temperatureContainer = document.querySelector('.temperature-container');
  const additionalWeatherInfo = document.querySelector(
    '.additional-weather-info'
  );
  const toggleButton = document.querySelector('.toggle-button');

  const show = () => {
    locationPlace.textContent = 'Loading...';
    spin.style.display = 'block';
    date.style.display = 'none';
    temperatureContainer.style.display = 'none';
    additionalWeatherInfo.style.display = 'none';
    toggleButton.style.display = 'none';
  };
  const hide = () => {
    spin.style.display = 'none';
    date.style.display = 'block';
    temperatureContainer.style.display = 'flex';
    additionalWeatherInfo.style.display = 'flex';
    toggleButton.style.display = 'flex';
  };

  return { show, hide };
}
