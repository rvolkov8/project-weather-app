import './css/style.css';
import './css/left-part.css';
import './css/right-part.css';
import './css/spin.css';
import './css/toggle-button.css';

import UIUpdaterFactory from './UIUpdater';

const UIUpdater = UIUpdaterFactory();

const searchInputElement = document.querySelector('#search');
const searchButton = document.querySelector('.search-icon');
const sliderButton = document.querySelector('.slider.round');

UIUpdater.updateWeather();

searchButton.addEventListener('click', () => {
  if (searchInputElement.value !== '') {
    UIUpdater.updateWeather();
  }
});
sliderButton.addEventListener('click', UIUpdater.toggleTemperature);
