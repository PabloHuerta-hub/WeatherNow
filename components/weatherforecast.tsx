import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { BlurView } from 'expo-blur';
import dayjs from 'dayjs'; // Importa Dayjs
import ForecastModal from './modal';
import styles from './styles';

const Forecast = ({ date, forecastdata }: Props) => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const [selectedForecast, setSelectedForecast] = useState<WeatherForecast[]>([]); 
  const [modalVisible, setModalVisible] = useState(false);

  const handleDayPress = () => {
    const filteredForecast = forecastdata.filter(item => {
      const itemDate = dayjs.unix(item.dt);
      return itemDate.format('YYYY-MM-DD') === date.format('YYYY-MM-DD');
    });
    setSelectedForecast(filteredForecast);
    setModalVisible(true);
  };

  return (
    <View>
      <Pressable
        disabled={false}
        
        onPress={handleDayPress}
      >
        <BlurView intensity={30} style={styles.forecastCard}>
          <Text style={styles.forecastDate}>{daysOfWeek[date.day()]} {date.format('DD')}</Text>
          <Text style={styles.forecastDate}>Press for forecast</Text>
        </BlurView>
      </Pressable>
      <ForecastModal
  visible={modalVisible}
  onClose={() => setModalVisible(false)}
  forecast={selectedForecast}
  selectedDate={date} // Asegurarse de pasar selectedDate si es necesario
/>
    </View>
  );
};

export default Forecast;
