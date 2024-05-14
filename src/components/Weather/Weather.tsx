import { useEffect, useState } from 'react';
import mockedWeather from './mockedWeather.json';

type WeatherResponse = typeof mockedWeather;

const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?';
const searchParams = new URLSearchParams({
  appid: import.meta.env.VITE_WEATHER_API_KEY,
});

const Weather: React.FC = () => {
  const [weather, setWeather] = useState<WeatherResponse>();

  useEffect(() => {
    const fetchWeather = async () => {
      const response: Response = await fetch(
        WEATHER_URL + searchParams.toString()
      );

      return (await response.json()) as Promise<WeatherResponse>;
    };

    const onSuccess: PositionCallback = (position) => {
      searchParams.set('lat', position.coords.latitude.toString());
      searchParams.set('lon', position.coords.longitude.toString());

      fetchWeather()
        .then((data) => {
          setWeather(data);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    const onError: PositionErrorCallback = (error) => {
      console.error(`Weather error: (${error.code}): ${error.message}`);
    };

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return <p>Weather</p>;
};

export default Weather;
