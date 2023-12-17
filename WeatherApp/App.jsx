import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import CurrentWeather from './src/Screens/CurrentWeather'
import UpcomingWeather from './src/Screens/UpcomingWeather'
import City from './src/Screens/City'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import Icon from 'react-native-ico-modern-ui';

import Icon from 'react-native-ico';

// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import Icon from 'react-native-ico-modern-ui';
// import Icon from 'react-native-ico-modern-ui';


// import {navigationContainer} from ''

const Tab = createBottomTabNavigator();

const App = () => {
// const icon = <FontAwesome5 name={'sun'}  style={styles.icon} />;
  
  return (
    // We gave flex so that SafeAreaView can get whole phone size then items came there: Inshort flex:1 to SafeAreaView in App.jsx is compolsory
    <SafeAreaView style={{flex:1,}}>

      <NavigationContainer> 
      {/* Never put any react-native core comp inside container */}
        <Tab.Navigator screenOptions={{
          tabBarActiveTintColor:'red',
          tabBarInactiveTintColor:'grey',
        }} > 
        {/*
const myIcon = <Icon name="rocket" size={30} color="#900" />; */}
          <Tab.Screen  name='Current ' component={CurrentWeather} options={{
            // we get out the focoused prop by destructure
            tabBarStyle:{
             backgroundColor:'lightblue', 
            },
            headerStyle:{
              backgroundColor:'lightblue',
            },
            headerTitleStyle:{
              fontWeight:'bold',
              fontSize:30,
              // textAlign:'center',
              // alignSelf:'center',
            },
              tabBarIcon: ({focused}) => (
                // Change icon of all  later on
                <Icon
                  name="weather-sun-rise"
                  group="font-awesome"
                  color={focused ? 'tomato' : 'black'} />
                
           
            
         
                  )}} />
          <Tab.Screen
            name="Upcoming "
            component={UpcomingWeather}
            options={{
            tabBarIcon: ({focused}) => (   
              <Icon name="weather-sun-rise" group="font-awesome" color ={focused ? 'tomato' : 'black' } />
              )  
           
            
         
          }} 
          />
          <Tab.Screen name='City Details' component={City} 
          options={{
            tabBarIcon: ({focused}) => (   
              <Icon name="weather-sun-rise" group="font-awesome" color ={focused ? 'tomato' : 'black' } />
              )  
           
            
         
          }} 
          />
       </Tab.Navigator>
       </NavigationContainer>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  // icon:{
  //   fontWeight:'bold',
  //   fontSize:30,
    
  // }
})