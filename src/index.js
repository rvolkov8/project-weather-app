import './css/style.css';
import './css/left-part.css';
import './css/right-part.css';

import UIUpdaterFactory from './UIUpdater';

const UIUpdater = UIUpdaterFactory();

const searchButton = document.querySelector('.search-icon');

UIUpdater.updateWeather();

searchButton.addEventListener('click', UIUpdater.updateWeather);
