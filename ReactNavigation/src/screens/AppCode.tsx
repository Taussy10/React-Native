import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

//1. Navigation Container
import {NavigationContainer} from '@react-navigation/native';
// 2. For Navigating in diffrent screen
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//3. Imorting screens
import Home from './Home';
import Details from './Details';

/*3 TypeChecking for TypesScript puropses: RootstackParamList is a type(mechanism) which checks Screens Comps type 
1. Home type doesn't have any parameter so it doesn't have any type = undefined 
2. Details Has para = productId and type = string. 
Why paramter: it's a TypeScript sytnax that you have to make an obejct and pass string with paramters
*/
export type RootStackParamList = {
  Home: undefined;
  Details: {productId: string};
};

//4: use method createNativeStackNavigator() to createNavigator stack by which we navigate in diffrent screens we get Stack.Navigator and Stack.Screen 
//RoteStackParamList helping Details to get string dataType and Home to Undefiend

const Stack = createNativeStackNavigator<RootStackParamList>();


function App(): JSX.Element {
  return (
    // SafeAreaView Takes entire space of phone that's why we tell Hey SafeAreaView take 1 =100%(Learn flexBox If you don't get it) all the space that aviablble:It's a common and best practice so always do with safeAreaView
    <SafeAreaView style={{flex: 1}}>
      {/* 1. Container ke andar band kra    */}
      <NavigationContainer>
        {/* Intial Page ka location dia */}
        <Stack.Navigator initialRouteName="Home">
          {/* All Sceren Ka location diya */}

          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'Trending Products',
            }}
          />
          <Stack.Screen
            name="Details"
            component={Details}
            options={{
              title: 'Product Details',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
