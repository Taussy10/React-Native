
/* eslint-disable quotes */

/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, FlatList , StatusBar , ImageBackground} from 'react-native'

import React from 'react'
import ListItem from '../Components/ListItem'
import { weatherType } from '../Utilties/WeatherType';

const UpcomingWeather = () => {
  const  DATA = [
    {
    dt_txt: 11,
    main:{
    temp_max: 4,
    temp_min: 2,
       },
      weather: [
         {
         main: 'Clear',
         },
     ]
     },
   
    {
    dt_txt: 12,
    main:{
    temp_max: 15,
    temp_min: 14,
       },
       weather:[
         {
         main: 'Clouds',
         },
     ]
     },
     {
       dt_txt: 13,
       main:{
       temp_max: 19,
       temp_min: 16,
          },
          weather:[
           {
            main: "Rain",
           },
         ]
        },
     ]
   
  return (

    <View style={styles.container}>
  
      <Text style={{textAlign:'center' , fontSize:30}}>Upcoming Weather</Text>
      <ImageBackground source={require('../Assets/Images/Image1.jpg')} style={styles.image}>
      <FlatList 
      data={DATA}
      // item = DATA it's a FlatList prop
      renderItem={({item})=>(
        // we passed a prop item to ListItem then he took the data from herer through Item
        <ListItem item = {item}/>
      )}
      // Key must be string that's why converted in string and key must be unique 
     keyExtractor={(item) => item.dt_txt.toString()}
      />
      </ImageBackground>
    </View>
  );
};

export default UpcomingWeather;

const styles = StyleSheet.create({

  container:{
    flex:1,
    // Status bar is for at the top something: Know about it 
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor:'pink',
  },

  image:{
  flex:1,

  },
}
)