import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

//Same as flatCards.tsx but with scrollView and it's property of horizontal = {true} so that it can scoll horizontally
const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      {/* for going left to right of cards */}
      <ScrollView horizontal={true} style={styles.container}>
        <View style={styles.container}>
          <View style={[styles.card, styles.cardOne, styles.cardElevated]}>
            <Text style={styles.cardText}>Scroll Left side </Text>
          </View>
          <View style={[styles.card, styles.cardTwo]}>
            <Text style={styles.cardText}>Green</Text>
          </View>
          <View style={[styles.card, styles.cardThree]}>
            <Text style={[styles.cardText]}>Blue</Text>
          </View>
          <View style={[styles.card, styles.cardThree]}>
            <Text style={[styles.cardText]}>Blue</Text>
          </View>
          <View style={[styles.card, styles.cardThree]}>
            <Text style={[styles.cardText]}>Blue</Text>
          </View>
          <View style={[styles.card, styles.cardThree]}>
            <Text style={[styles.cardText]}>Blue</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ElevatedCards;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    padding: 8,
    backgroundColor: 'black',
    flexDirection: 'row',
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
  },
  cardElevated: {
    backgroundColor: 'grey',
    //Adds a drop shadow to the box in only Andorid(Not in IOS)
    elevation: 4,
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
