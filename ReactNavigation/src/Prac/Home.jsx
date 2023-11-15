import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator } from '@react-navigation/native-stack'


/*Navigation prop is automatically provided to screen components from  import {NativeStackScreenProps} from "@react-navigation/native-stack" and it dispatch some actions such as navigate */
const Home = ({navigation}) => {
  return (
    <View>
 <Text>Home</Text>

{/* //navigate() method from navigation helps to go in another screen here it's details */}
 <Button 
 title='Go to Details'
 onPress={ () => navigation.navigate('Details')} 
 />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})