import { StyleSheet } from "react-native";
import Constanst from 'expo-constants'
const styles = StyleSheet.create({
    weatherContainer: {
      flex: 1,
      
    },

    tempText: {
      fontFamily: 'InterBlack',
      fontSize: 130,
      color: '#FEFEFE',
    },

    title: {
      fontFamily: 'Inter',
      fontSize: 30,
      color: 'lightgray',
    },

    loader_text:{
      color:'#ffff',
      fontSize: 20,
      fontWeight: 'bold',

    },
    loader: {
      flex: 1,
      alignItems: 'center',
      justifyContent:'center',
      backgroundColor: 'orange',
    
    },
    loader_animation:{
      marginBottom: -50,
      aspectRatio:1,
      width:'80%'
    },
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: '100%',
    },
    weather_animation:{
      aspectRatio:1,
      flex: 1,
      width:'40%'
    },
    img_weather:{
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',

    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    forecastCard:{
    
      padding: 10,
      height: 100,
      borderColor: 'gainsboro',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      borderWidth: StyleSheet.hairlineWidth,

    },
    forecastTemp:{
        fontFamily: 'InterBlack',
        fontSize: 35,
        color: 'white',
        marginVertical: 10,
    },
    forecastDate: {
      fontFamily: 'Inter',
      color: 'ghostwhite',
      fontSize: 16,
    },

    modalContainer: {
      flex: 1,
      borderColor: 'gainsboro',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
     
    },
    modalContent: {
      padding: 10,
      borderColor: 'gainsboro',
      borderRadius: 30,
      alignItems: 'center',
      justifyContent: 'center',
      overflow:'hidden',
      borderWidth: StyleSheet.hairlineWidth,
    },
    headerText: {
      color:'white',
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    chart: {
      marginVertical: 8,
      borderRadius: 16,
    },
    modalButton: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
      paddingVertical: 12,
      paddingHorizontal: 20,
    },
    gradient: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
      paddingVertical: 12,
      paddingHorizontal: 20,
    },
    buttonText: {
      color: 'white',
      textAlign: 'center',
      fontSize: 16,
      fontWeight: 'bold',
    },
  
  });
export default styles;
/* HTML: <div class="loader"></div> */
