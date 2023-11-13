//No need to use SafeAreaView cause I have given in App.tsx so there it can be taken
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


// In this you are going to learn how to use flex box in react Native and how to structure the Comp

//how to structure the Comp how should i think of buildng this comp 
// One biggest div: for whole phone
//flat Cards text
// view for for all cards 
// view for each cards and in this Text and if I want to center then i have to use flex center properties which works only on parent 
//so use on parent do't use on child otherwise won't work


const FlatCards: React.FC = () => {

  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={styles.cardText}>Red</Text>
        </View>
        <View style={[styles.card,styles.cardTwo ]}>
          <Text style={styles.cardText}>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text style={[styles.cardText, ]}>Blue</Text>
        </View>
      </View>
    </View>
  );
};

export default FlatCards;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    flexDirection: 'row', // Arrange children horizontally
    justifyContent: 'center', // Center children horizontally
    alignItems: 'center', // Center children vertically
    backgroundColor: 'black',
    flex: 1, // Take up remaining vertical space
    padding:52,
  },
  card: {  
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
  },
  cardText: {
    color: 'white', 
  },
  cardOne: {
    backgroundColor: 'red',
  },

  cardTwo: {
    backgroundColor: 'green',
  },

  cardThree: {
    backgroundColor: 'blue',
  },


});

