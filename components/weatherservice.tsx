import { useEffect, useState } from 'react';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync, reverseGeocodeAsync } from 'expo-location';
import { BASE_URL, API_KEY } from '@env';

const useWeather = (): WeatherHookResult => {
    const [city, setCity] = useState<string | null>(null);
    const [weather, setWeather] = useState<Weather | null>(null);
    const [forecast, setForecast] = useState<WeatherForecast[]>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    //Get the actual city where the user is
    useEffect(() => {
      (async () => {
        let { status } = await requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
  
        let location = await getCurrentPositionAsync({});
        const address = await reverseGeocodeAsync(location.coords);
        if (address && address[0] && address[0].city) {
          const cityName = address[0].city
          setCity(cityName);
        } else {
          console.error('La ciudad obtenida no es válida');
        }
      })();
    }, []);
  
    useEffect(() => {
      if (city) {
        fetchWeather();
        fetchForecast();
      }
    }, [city]);
  //Get the actual weather where the user is
    const fetchWeather = async () => {
      if (!city) {
        return;
      }
      const results = await fetch(
        `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&lang=es&units=metric`,
      );
      const data = await results.json();

      setWeather(data);
      setIsLoading(false);
    };
  //Get the forecast of the city the user is
    const fetchForecast = async () => {
      if (!city) {
        return;
      }
  
      const results = await fetch(
        `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&lang=es&units=metric`
      );
      const data = await results.json();

      setForecast(data.list);
    };
  
    return { city, weather, isLoading, forecast,errorMsg };
  };
  
  export default useWeather;