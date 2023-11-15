import { SafeAreaView, ScrollView, StyleSheet, Text, View,Image, Button } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:30,}}> Work in progress... </Text> 
        <Image source={{uri: 'https://reactjs.org/logo-og.png'}}/>  
        <View> 
        <Image source={{uri:'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}} style={styles.image}/>
        </View>
    <View> 
      {/* <Text style={{fontSize:40,textAlign:'center',fontWeight:'bold',  marginBottom:10, }}>Welcome To </Text> */}
      <Text style={{fontSize:40,color:'#87ceeb', fontWeight:'bold', textAlign:'center', fontSize:30, }}>MyApp </Text>
      <Text style={styles.appDesc}>🌐 Online Courses -Learn Anything,{'\n'} at Your Own Pace and On Your Schedule
</Text>
      </View>
      <Button 
      title='Go to Course Section'
      onPress={() => navigation.navigate('Course')}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
container:{
  marginTop:80,
 padding:20,
 justifyContent:'center',
 alignItems:'center',
},
image:{
  width: 300, 
  height: 250,
  borderRadius:20,
  marginBottom:10,
},
  appDesc:{
    fontSize:15,
    color:'grey',
    marginBottom:85,
  },
})