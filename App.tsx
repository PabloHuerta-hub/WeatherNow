import React from 'react';
import { View, Text, SafeAreaView, ImageBackground, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './components/styles';
import LottieView from 'lottie-react-native';
import ForecastItem from './components/weatherforecast';
import dayjs from 'dayjs';
import useWeather from './components/weatherservice';
import { StatusBar } from 'expo-status-bar';
export default function App() {
 
  const { city, weather,forecast, isLoading } = useWeather();
  const WeatherBackgroundSource = require('./assets/background/sunnybackground.jpg')
  const currentDate = dayjs();
  
  // Calcular los próximos cinco días
  const getNextFiveDays = () => {
    const nextFiveDays = [];
    for (let i = 1; i <= 5; i++) {
      const nextDay = currentDate.add(i, 'day').startOf('day');
      nextFiveDays.push(nextDay);
    }
    return nextFiveDays;
  };

  const nextFiveDays = getNextFiveDays();
  const weatherImageSource = weather && weather.weather && weather.weather[0]
  ? weather.weather[0].main === 'Clear'
    ? require('./assets/weatherconditions/sunny.json')
    : weather.weather[0].main === 'Rain'
    ? require('./assets/weatherconditions/rainy.json')
    : weather.weather[0].main === 'Clouds'
    ? require('./assets/weatherconditions/clouds.json')
    : weather.weather[0].main === 'Snow'
    ? require('./assets/weatherconditions/snowy.json')
    : weather.weather[0].main === 'Storm'
    ? require('./assets/weatherconditions/storm.json')
    : require('./assets/weatherconditions/default.json') 
  : require('./assets/weatherconditions/default.json') ;

  if (isLoading) {
    return (
      <SafeAreaView  style={styles.loader}>
        <LinearGradient
        colors={['#22c1c3','#fdbb2d']}
        style={styles.background}
      />
        <LottieView source={require('./assets/loader/loader.json')} autoPlay loop style={styles.loader_animation} /> 
       <Text style={styles.loader_text}>Cargando datos del clima...</Text>
    
      </SafeAreaView>
      
    );
  }
 else{
  return (
    <ImageBackground source={WeatherBackgroundSource} style={styles.img_weather}>
    <View style={styles.overlay}/>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <LottieView
          source={weatherImageSource}
          autoPlay
          loop
          style={{
            width: 200,
            aspectRatio: 1,
      
          }}
        />
        <Text style={styles.title}>{city}</Text>
          <Text style={styles.tempText}>{Math.round(weather?.main.temp?? 0)}°</Text>
          <Text style={styles.title}>{weather?.weather[0].main}</Text>
      </View>

  
     <FlatList
  data={nextFiveDays}
  horizontal
  showsHorizontalScrollIndicator ={false}
  style={{
    flexGrow: 0,
    height: 100,
    marginBottom: 40,
  }}
  contentContainerStyle={{
    gap: 10,
    paddingHorizontal: 10,
  }}
  renderItem={({ item }) => (
    <ForecastItem
      key={item.toString()} 
      date={item}
      forecastdata={forecast || []} 
    />
  )}
  keyExtractor={(item, index) => index.toString()}
/>
<StatusBar style="light" />
  </ImageBackground>
  );
 

  }

  
}
