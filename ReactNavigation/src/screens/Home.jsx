import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
//Imported the container so that we can take push and pop screens cause data is screens are inside Contaner(Check App.jsx) 
import {NavigationContainer} from '@react-navigation/native';

/*For getting navigation object and it has many function{Remember: Console.log() console is object and log is function and we are calling the function by 
log( )
same concept  navigation is object that is destructure(cause we wanna use methods inside it one by one ) and navigate() is function }*/
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