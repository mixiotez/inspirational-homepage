import { useEffect, useState } from 'react';
import mockedWeather from './mockedWeather.json';
import mockedIPLocation from './mockedIPLocation.json';
import { WeatherContainer } from './WeatherContainer';

type WeatherResponse = typeof mockedWeather & {
  sys: { country?: string };
};

const IPINFO_URL = `https://ipinfo.io/?token=${
  import.meta.env.VITE_IPINFO_TOKEN
}`;
const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?';
const searchParams = new URLSearchParams({
  appid: import.meta.env.VITE_WEATHER_API_KEY,
  units: 'metric',
});

const Weather: React.FC = () => {
  const [weather, setWeather] = useState<WeatherResponse>();
  const currentWeather = weather?.weather[0];

  useEffect(() => {
    const locateWithIPAddress = async () => {
      const response = await fetch(IPINFO_URL);

      return (await response.json()) as Promise<typeof mockedIPLocation>;
    };

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
      console.warn(`Weather error: (${error.code}): ${error.message}`);

      locateWithIPAddress()
        .then((data) => {
          const [latitude, longitude] = data.loc.split(',');

          searchParams.set('lat', latitude);
          searchParams.set('lon', longitude);

          fetchWeather()
            .then((data) => {
              setWeather(data);
            })
            .catch((error) => {
              console.error(error);
            });
        })
        .catch((err) => {
          console.error(err);
        });
    };

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  if (!weather || !currentWeather) return <></>;

  return (
    <WeatherContainer>
      <div>
        <p>{currentWeather.main}</p>
        <img
          src={`https://openweathermap.org/img/wn/${currentWeather.icon}@2x.png`}
          role="presentation"
        />
      </div>
      <div>
        <p>
          {weather.name}, {weather.sys?.country}
        </p>
        <p>
          <b>{weather.main.temp.toFixed(1)}°</b>
        </p>
      </div>
    </WeatherContainer>
  );
};

export default Weather;
