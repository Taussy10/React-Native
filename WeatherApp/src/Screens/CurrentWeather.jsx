import {StyleSheet, SafeAreaView, Text, View, Button} from 'react-native';
import React from 'react';
import { weatherType } from '../Utilties/WeatherType';

const CurrentWeather = () => {
  return (
      <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text>Current Weather</Text>
        <Text style={styles.temp}> {/* Temp: */} 6 </Text>
     
        <Text style={styles.feels}>Feels Like 5 </Text>
        <View style={styles.highLowWrapper}>
          <Text style={styles.highLow}>High:8 </Text>
          <Text style={styles.highLow}> Low: 6 </Text>
        </View>
      </View>

      <View style={styles.bodyWrapper}>
        <Text style={styles.desc}>It's Sunny</Text>
        <Text style={styles.msg}>Wear a sT-Shirt</Text>
      </View>
    </SafeAreaView>
  );
};

export default CurrentWeather;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'pink',
  },
  container: {
    
    backgroundColor: 'pink',
    alignItems: 'center',
  },
  temp: {
    fontSize: 48,
  },
  feels: {
    fontSize: 30,
  },
  highLow: {
    fontSize: 20,
  },
  highLowWrapper: {
    flexDirection: 'row',
  },
  bodyWrapper: {
    alignItems: 'center',
  },
  desc: {
    fontSize: 48,
  },
  msg: {
    fontSize: 30,
  },
});
