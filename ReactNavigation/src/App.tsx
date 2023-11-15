import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'

//1. Navigation Container
import {NavigationContainer} from '@react-navigation/native'

// 2. For Navigating in diffrent screen
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//3. Imorting screens
import Home from './screens/Home'
import Details from './screens/Details';

const Stack = createNativeStackNavigator() ;

const App = () => {
  return (
      // SafeAreaView Takes entire space of phone that's why we tell Hey SafeAreaView take 1 =100%(Learn flexBox If you don't get it) all the space that aviablble:It's a common and best practice so always do with safeAreaView
    <SafeAreaView style={{flex:1}} >
      {/* 1. Container ke andar band kra    */}
      <NavigationContainer>
           {/* Intial Page ka location dia */}
        <Stack.Navigator initialRouteName='Home'>

           {/* All Sceren Ka location diya */}
<Stack.Screen name='Home' component={Home} /> 
<Stack.Screen name='Details' component={Details}  /> 


</Stack.Navigator>
        
       

      </NavigationContainer>

    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})