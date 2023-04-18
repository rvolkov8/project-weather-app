export default function weatherDataProcessorFactory() {
  const API_KEY = '7b77db6e73194a0eb1d90834231504';
  const DEFAULT_CITY = 'sofia';
  const API_URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=`;
  const searchInputElement = document.querySelector('#search');

  // eslint-disable-next-line consistent-return
  const getWeatherData = async () => {
    try {
      if (searchInputElement.value === '') {
        searchInputElement.value = DEFAULT_CITY;
      }
      const response = await fetch(`${API_URL}${searchInputElement.value}`, {
        mode: 'cors',
      });
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
      const weatherData = await response.json();
      return weatherData;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  const getLocation = async () => {
    const weatherData = await getWeatherData();
    const { country } = weatherData.location;
    const city = weatherData.location.name;
    const formattedLocation = `${city}, ${country}`;
    return formattedLocation;
  };

  const getTemperatureCelsius = async () => {
    const weatherData = await getWeatherData();
    const temperature = weatherData.current.temp_c;
    const formattedTemperature = `${temperature}°`;
    return formattedTemperature;
  };

  const getTemperatureFahrenheit = async () => {
    const weatherData = await getWeatherData();
    const temperature = weatherData.current.temp_f;
    const formattedTemperature = `${temperature}°`;
    return formattedTemperature;
  };

  const getWeatherCondition = async () => {
    const weatherData = await getWeatherData();
    const condition = weatherData.current.condition.text;
    return condition;
  };

  const getWeatherIcon = async () => {
    const weatherData = await getWeatherData();
    const { icon } = weatherData.current.condition;
    return icon;
  };

  const getFeelsLikeCelsius = async () => {
    const weatherData = await getWeatherData();
    const feelsLike = weatherData.current.feelslike_c;
    const formattedFeelsLike = `${feelsLike}°`;
    return formattedFeelsLike;
  };

  const getFeelsLikeFahrenheit = async () => {
    const weatherData = await getWeatherData();
    const feelsLike = weatherData.current.feelslike_f;
    const formattedFeelsLike = `${feelsLike}°`;
    return formattedFeelsLike;
  };

  const getHumidity = async () => {
    const weatherData = await getWeatherData();
    const { humidity } = weatherData.current;
    const formattedHumidity = `${humidity}%`;
    return formattedHumidity;
  };

  const getWindSpeedKph = async () => {
    const weatherData = await getWeatherData();
    const windSpeed = weatherData.current.wind_kph;
    const formattedWindSpeed = `${windSpeed} kph`;
    return formattedWindSpeed;
  };

  return {
    getLocation,
    getTemperatureCelsius,
    getTemperatureFahrenheit,
    getWeatherCondition,
    getWeatherIcon,
    getFeelsLikeCelsius,
    getFeelsLikeFahrenheit,
    getHumidity,
    getWindSpeedKph,
  };
}
