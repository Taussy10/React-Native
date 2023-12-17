import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CurrentWeather from '../Screens/CurrentWeather'

const ListItem = ({item}) => {

  
  return (
    <View style={styles.item}> 
    <Text style={styles.date}>{item.dt_txt}</Text>
    <Text style={styles.temp}>{item.main.temp_max}</Text>
    <Text style={styles.temp}>{item.main.temp_min}</Text>

  </View>
  )
}

export default ListItem

const styles = StyleSheet.create({
  item:{
    backgroundColor:'yellow',
    padding:30,
    marginVertical:8,
    marginHorizontal:16,
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems:'center',
    borderWidth:5,
  },
  date:{
    color:'red',
    fontSize:15,
  },
  temp:{
    color:'red',
    fontSize:20,
  },
})