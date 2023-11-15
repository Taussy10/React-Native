import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
//21.Navigation
import {NativeStackScreenProps} from "@react-navigation/native-stack"
import {RootStackParamList} from '../App'

//TypeChecking just for typescript
type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>

//navigation prop is automatically provided to screen components by the  import {NativeStackScreenProps} from "@react-navigation/native-stack" it checks props of 

const Home = ({navigation}: HomeProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Home Screen</Text>
      <Button
      title='Go to details'
      // onPress={() => navigation.navigate("Details", {
      //   productId: "86"
      // })}
      
      // onPress={() => navigation.navigate("Details")}

      onPress={() => navigation.push('Details', {
        productId: "786"
      })}

      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    smallText: {
        color: "#000000"
    }
})