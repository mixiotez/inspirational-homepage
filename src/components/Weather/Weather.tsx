import { useEffect, useState } from 'react';
import mockedWeather from './mockedWeather.json';
import mockedIPLocation from './mockedIPLocation.json';
import { WeatherContainer } from './WeatherContainer';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { FetchStatus } from '../common/types';
import { useNotifications } from '../hooks/useNotifications';
import { WEATHER_ERROR, IPINFO_ERROR } from '../common/errors';

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
  const { addNotification } = useNotifications();
  const [fetchStatus, setFetchStatus] = useState<FetchStatus>('loading');
  const [weather, setWeather] = useState<WeatherResponse>();
  const currentWeather = weather?.weather[0];

  const handleError = (error: unknown) => {
    setFetchStatus('error');
    console.error('Weather error: ', error);
  };

  useEffect(() => {
    let ignore = false;
    const locateWithIPAddress = async () => {
      try {
        const response = await fetch(IPINFO_URL);
        const data = (await response.json()) as typeof mockedIPLocation;
        const [latitude, longitude] = data.loc.split(',');

        void fetchWeather(latitude, longitude);
      } catch (error) {
        if (!ignore) {
          addNotification(IPINFO_ERROR);
          handleError(error);
        }
      }
    };

    const fetchWeather = async (latitude: string, longitude: string) => {
      try {
        searchParams.set('lat', latitude);
        searchParams.set('lon', longitude);

        const response: Response = await fetch(
          WEATHER_URL + searchParams.toString()
        );
        const data = (await response.json()) as WeatherResponse;

        if (!ignore) {
          setFetchStatus('successful');
          setWeather(data);
        }
      } catch (error) {
        if (!ignore) {
          addNotification(WEATHER_ERROR);
          handleError(error);
        }
      }
    };

    const onSuccess: PositionCallback = ({
      coords: { latitude, longitude },
    }) => {
      void fetchWeather(latitude.toString(), longitude.toString());
    };

    const onError: PositionErrorCallback = (error) => {
      console.warn(`Weather error: (${error.code}): ${error.message}`);

      void locateWithIPAddress();
    };

    setFetchStatus('loading');
    navigator.geolocation.getCurrentPosition(onSuccess, onError);

    return () => {
      ignore = true;
    };
  }, [addNotification]);

  if (fetchStatus === 'error' || !weather) return <></>;

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
