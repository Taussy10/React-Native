import React from 'react';
//Stylesheet is for CSS
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  useColorScheme,
} from 'react-native';

// Important: style={styles.container} you can't write in View cause it is below the SafeArea View cause if you write in View then it will in that color that you want but SafeAreaview will be in black so no effect because it is up in stack: understand by stacking safearea is uppermost stack
// so safarea become div according to Device then view also act as div but nested div and below the safeArea then
//text also act as nested div
//so if you want to change on  overall(e.g.: Dark mode ) device  then you have to give style to
//safearea cause view is under the SafeAreaView

// : JSX.Elment: When you use tsx then you have to write like this for writing JSX and in ReactNative we use JSX
function DarkMode(): JSX.Element {
  const isDarkMode = useColorScheme() === 'light';
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={isDarkMode ? styles.whiteText : styles.blackText}>
          Hello Dark Mode
        </Text>
      </View>
    </SafeAreaView>
  );
}
//Stylesheet.create() is a method that contains style in object
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  whiteText: {
    color: 'white',
    
  },
  blackText: {
    color: 'black',
  },
});

export default DarkMode;
