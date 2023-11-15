import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Prac/Home'
import Details from './Prac/Details';

const Stack = createNativeStackNavigator() ;

const App = () => {
  return (
    <SafeAreaView style={{flex:1}} >
      <NavigationContainer>
        <Stack.Navigator>
<Stack.Screen name='Home' component={Home} /> 
<Stack.Screen name='Details' component={Details}  /> 


</Stack.Navigator>
        
       

      </NavigationContainer>

    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})