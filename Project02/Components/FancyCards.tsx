import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

//In this card you will learn about images and props of a tag
const FancyCards = () => {

  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card , styles.cardElevated]}>
        {/* when you write props in ReactNative comps write in {curly braces and offcourse source has it's own curly/style braces} */}
       <Image source={{uri:'https://upload.wikimedia.org/wikipedia/commons/b/ba/Hawa_Mahal_east_facade_%2814-07-2022%29.jpg'} } style={{width: 400, height: 200, }} />
       <View > 
       <Text style={styles.label}>Hawa Mahal</Text>
       <Text style={styles.label}>Pink City, Jaipur</Text>
       </View>
      </View>
    </View>
  )
}

export default FancyCards

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
   
  },
  card: {
    borderRadius: 200,
    
  },
  cardElevated: {
    elevation: 4,
  },
  label:{
    fontSize:15,
    color:'white',
    backgroundColor:'#f20ab8',
    textAlign:'center',
    fontWeight:'bold',
    padding:5,
    


  }
})