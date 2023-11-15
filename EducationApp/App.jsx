import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import Home from './Screens/Home'
import Course from './Screens/Course'
import { NavigationContainer } from '@react-navigation/native' 
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const stack = createNativeStackNavigator() 

const App = () => {
  return (
    <SafeAreaView style={{flex:1 , backgroundColor:'red'}}>
      <NavigationContainer>
        <stack.Navigator initialRouteName='Home'> 
          <stack.Screen name='Home' component={Home} />
          <stack.Screen name='Course' component={Course} />
        </stack.Navigator>
      </NavigationContainer>
      
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})