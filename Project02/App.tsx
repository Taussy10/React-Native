//rnfes
//ScrollView: for scrolling top to dowing in phone
//We don't need view when we have SrollView cause it works for both View = div and Scrolling 
import {SafeAreaView, ScrollView, StyleSheet,  } from 'react-native'
import React from 'react'
import FlatCards from './Components/FlatCards'
import ElevatedCards from './Components/ElevatedCards'
import FancyCards from './Components/FancyCards'
import ActionCard from './Components/ActionCard'
import ContactList from './Components/ContactList'
import List from './Components/List'

const App = () => {
  return (
    <SafeAreaView> 
      <ScrollView>
      
      <FlatCards/>
      <ElevatedCards/>
      <FancyCards/>
      <ActionCard/>
      <ContactList/>
      <List/>
    </ScrollView>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})