import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../Config/Firebase'

const UseAuth = () => {
  const {user, setUser} = useState(null)
useEffect(() => {
     const unSub = onAuthStateChanged(auth, user => }  
    ) 
  return (
    
  )
}

export default UseAuth

const styles = StyleSheet.create({})