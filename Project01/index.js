/**
 * @format
 */
// index.js is main file from where everything imports 
//and exports 
//AppRegistry is a module provided by React Native for registering and starting the main components of your application.
import {AppRegistry} from 'react-native';
//This app is getting App.js not App.tsx for tsx you have to write extension
//import App from './App';
import DarkMode from './DarkMode.tsx';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => DarkMode);
 