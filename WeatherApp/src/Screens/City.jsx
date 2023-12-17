import { StyleSheet, Text, View, ImageBackground, StatusBar } from 'react-native'
import React from 'react'

const City = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../Assets/Images/Image1.jpg')} style={styles.imageLayout}> 

{/* for using mutliple styles we wrap them in array[] */}
      <Text style={[styles.cityName, styles.cityCountryText]}>D6elhi</Text>

      <Text style={[styles.countryName , styles.cityCountryText]}>India</Text>

      <View style={styles.populationWrapper}>
        {/* Put icon of population */}
      <Text style={styles.populationText}>1.5cr</Text>
      </View>


{/* If there is more than one text add them in view so we can use flex props add them it's compulsory */}

      <View style={styles.setRiseWrapper}> 
        {/* Add icons */}
      <Text style={styles.setRiseText}>6:30 AM</Text>
      <Text style={styles.setRiseText}>6:00 PM</Text>
      </View>

      </ImageBackground>
    </View>
  )
}

export default City

const styles = StyleSheet.create({
  container:{ 
    flex:1,
    backgroundColor:'pink',
    marginTop: StatusBar.currentHeight || 0,
  },
  imageLayout:{
    // so that it can take whole phone space
    flex:1,
  },
  cityName:{

    fontSize:40,

  },
  countryName:{

    fontSize:30,
  
  },
  cityCountryText:{
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'white',
  },

  populationWrapper:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginTop:30,

  },
  populationText:{
    fontSize:25,
    color:'red',
    marginLeft:7,
    fontWeight:'bold',

  },
setRiseWrapper:{
  flexDirection:'row',
  justifyContent:'space-around',
  alignItems:'center',
  backgroundColor:'red',
  marginTop:30,
},
setRiseText:{
  fontSize:30,
  color:'white',
  fontWeight:'bold'
}
  
})