import React from 'react';
import { View, Text, Modal,ImageBackground, Pressable } from 'react-native';
import { BlurView } from 'expo-blur';
import styles from './styles'; // Asegúrate de importar tus estilos
import dayjs from 'dayjs';
import { LinearGradient } from 'expo-linear-gradient';
import { LineChart } from 'react-native-chart-kit';
const ForecastModal = ({ visible, onClose, forecast, selectedDate }: ForecastModalProps) => {
    const filteredForecast = forecast.filter(item => {

        const itemDate = dayjs(item.dt_txt);
        return itemDate.isSame(selectedDate, 'day');
      });
      const chartData = {
        labels: filteredForecast.map(item => dayjs(item.dt_txt).format('hA')),
        datasets: [
          {
            data: filteredForecast.map(item => item.main.temp),
          },
        ],
      };
      const WeatherBackgroundSource = require('../assets/background/sunnybackground.jpg')
      const formattedDate = selectedDate.format('dddd, D [of] MMMM');

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >

<ImageBackground source={WeatherBackgroundSource} style={styles.img_weather}>
  <View style={styles.overlay}>
      <View style={styles.modalContainer}>
        <BlurView intensity={20} style={styles.modalContent}>
          <Text style={styles.headerText}>Forecast {formattedDate}</Text>
          <LineChart
        
            data={chartData}
            width={340} 
            height={300}
            yAxisSuffix="°C"
            chartConfig={{
              backgroundColor: '#5FFBF1',
              backgroundGradientFrom: '#f74c06',
              backgroundGradientTo: '#220b34',
      
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            bezier
            style={styles.chart}
          />
          
          <Pressable style={styles.modalButton} onPress={onClose}>
  <LinearGradient
    colors={['#f74c06', '#220b34']}
    style={styles.gradient}
  >
    <Text style={styles.buttonText}>Cerrar</Text>
  </LinearGradient>
</Pressable>
        </BlurView>
      </View>
      </View>
      </ImageBackground>
    </Modal>

  );
};

export default ForecastModal;
