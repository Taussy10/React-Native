import { StyleSheet, Text, View ,Linking, TouchableOpacity, Image} from 'react-native'
import React from 'react'

//Learned TouchableOpacity = button 
// Deeplinking to link with other comps 

const ActionCard = () => {
  // a function named as openWebsite has parameter webstieLink and it's dataType = string and it uses LInking.openURL method which helps to open a url and that URL has paramter( simillar to  variable of maths that will convert in number) = websiteLink will convert in siteLink in Touchablity reactNative tag
  function openWebsite(websiteLink:string) {
    Linking.openURL(websiteLink)
  }
 
  return (
    <View>
      <Text style={styles. headingText}>Blog Card</Text>
      <View style={[styles.card]}>
      <View style={[styles.headingContainer]}>
        <Text style={styles.headerText}>React-Native Documention  </Text>
        </View>
        <Image source={{uri:'https://blog.logrocket.com/wp-content/uploads/2021/08/react-native-svg-tutorial-examples.png '}} style={styles.image} />
{/* TouchableOpcaity a RN Comp(just like View) that has a prop(attribute) onPres when we press Text website loaded on browser then why it's in callBack function because it render two times
 firstRender: will render the comp and show on device secondRender: when you press the button the link loaded on the browser  */}
        <TouchableOpacity onPress ={() => openWebsite('https://reactnative.dev') }
        ><Text style={styles.rnInfo}>React Native is use for building mobile apps</Text>
          <Text style={styles.siteLink}>Read More...</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ActionCard

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    padding:10,
    width:'full',
    backgroundColor:'black',
    borderRadius:10,
    marginVertical:0,

  },
  headingContainer:{

    width:'full',
    height:50,
 

  },
  headerText:{
    color:'white',
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold',
  },
  image:{
    width:400,
    height:200,
    borderRadius:50,
  },
  rnInfo:{
    color:'white',
    fontSize:17,
  },
  siteLink:{
    color:'white',
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold',
    padding:15,
  }
})