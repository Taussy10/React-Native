import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

//You will learn about iternation of objects data to show in UI
const ContactList = () => {
  const contacts = [
    {
      uid: 1,
      name: 'Hitesh Choudhary',
      status: 'Just an extra ordinary teacher',
      imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
    },
    {
      uid: 2,
      name: 'Anurag Tiwari',
      status: 'I ❤️ To Code and Teach!',
      imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
    },
    {
      uid: 3,
      name: 'Sanket Singh',
      status: 'Making your GPay smooth',
      imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
    },
    {
      uid: 4,
      name: 'Anirudh Jwala',
      status: 'Building secure Digital banks',
      imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
    },
  ];
//How to make contact list: 
//1. make a box for all the things(single contact) 
//2. View and text for pic
//3. View and text for Name
//4. View and text for label 
  return (
    <View>
      <Text style={styles. headingText} >Contacts</Text>
      <ScrollView 
      style={styles.container}
      //When false, the view cannot be scrolled via touch interaction.
      scrollEnabled={false}
      >
        {/*There is an array(containg objects such as uid,name) named as contacts 
   we are using map method and destructure the objects so that we can use one by one
   then give the uniqe id to View(so that every object has it's own unique id) then we get the data one by one and why do we use { } 
   so that JS can be use in JSX */}
        {contacts.map(({uid,name,status,imageUrl}) =>( 
          <View key={uid} style={styles.userCard}>
            <Image source={{uri:imageUrl}} style={styles.userImage}/> 
            <View style={styles.label}> 
            <Text style={styles.userName}>{name}</Text>
            <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ) 
        
        )}
      </ScrollView>
    </View>
  )
}

export default ContactList

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container:{
    padding:15,
    backgroundColor:'black',
    borderRadius:10,

  },
  userCard:{
    flex:1,
    backgroundColor:'pink',
    flexDirection:'row',
    alignItems:'center',

  },
  userImage:{
 height:100,
 width:100,
 borderRadius:50,
  },
  label:{
    padding:10,
    margin:10,
  
  },
  userName:{
    

  },
  userStatus:{

  },
})