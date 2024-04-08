declare module '@env'{
  export const BASE_URL : string;
  export const API_KEY : string;
}
declare type Address ={
  city: string
}
declare type Position = {
  coords: {
    latitude: number;
    longitude: number;
    altitude: number | null;
    accuracy: number;
    altitudeAccuracy: number | null;
    heading: number | null;
    speed: number | null;
  };
  timestamp: number;
}
declare type MainWeather = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
};
declare type Weather = {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  weather: [
    {
      id: number,
      main: string,
      description: string,
      icon: string
    }
  ],
  id: number
};
declare type ForecastDescription={
      id: number,
      main: string,
      description: string,
      icon: string
  
}
declare type WeatherForecast = {
  main: MainWeather;
  dt: number;
  dt_txt: string;
  weather: ForecastDescription[];

};
interface WeatherHookResult {
  city: string | null;
  weather: Weather | null;
  forecast: WeatherForecast[] | undefined;
  isLoading: boolean;
  errorMsg: string | null;
}
interface Props {
  date: Dayjs;
  forecastdata: WeatherForecast[];
}


interface ForecastModalProps {
  visible: boolean;
  onClose: () => void;
  forecast: WeatherForecast[];
  selectedDate?: Dayjs; 
}
