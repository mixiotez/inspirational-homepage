import { useEffect, useState } from 'react';
import mockedWeather from './mockedWeather.json';
import mockedIPLocation from './mockedIPLocation.json';
import { WeatherContainer } from './WeatherContainer';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { FetchStatus } from '../common/types';

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
  const [fetchStatus, setFetchStatus] = useState<FetchStatus>('loading');
  const [weather, setWeather] = useState<WeatherResponse>();
  const currentWeather = weather?.weather[0];

  const handleError = (error: unknown) => {
    setFetchStatus('error');
    console.error('Weather error: ', error);
  };

  const handleSuccess = (data: WeatherResponse) => {
    setFetchStatus('successful');
    setWeather(data);
  };

  useEffect(() => {
    const locateWithIPAddress = async () => {
      const response = await fetch(IPINFO_URL);

      return (await response.json()) as Promise<typeof mockedIPLocation>;
    };

    const fetchWeather = async (latitude: string, longitude: string) => {
      searchParams.set('lat', latitude);
      searchParams.set('lon', longitude);

      const response: Response = await fetch(
        WEATHER_URL + searchParams.toString()
      );

      return (await response.json()) as Promise<WeatherResponse>;
    };

    const onSuccess: PositionCallback = ({
      coords: { latitude, longitude },
    }) => {
      fetchWeather(latitude.toString(), longitude.toString())
        .then(handleSuccess)
        .catch(handleError);
    };

    const onError: PositionErrorCallback = (error) => {
      console.warn(`Weather error: (${error.code}): ${error.message}`);

      locateWithIPAddress()
        .then((data) => {
          const [latitude, longitude] = data.loc.split(',');

          fetchWeather(latitude, longitude)
            .then(handleSuccess)
            .catch(handleError);
        })
        .catch(handleError);
    };

    setFetchStatus('loading');
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return (
    <WeatherContainer>
      {fetchStatus === 'loading' && (
        <ScaleLoader
          loading
          height={55}
          margin={4}
          aria-label="Loading Spinner"
          color="rgba(15,15,15, 0.75)"
        />
      )}
      {fetchStatus === 'successful' && currentWeather && (
        <>
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
        </>
      )}
    </WeatherContainer>
  );
};

export default Weather;
