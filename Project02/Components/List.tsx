import {  Text, View } from 'react-native';
import React from 'react';

const List = () => {
  const Array = [
    { id: 1, name: 'Tausif' },
    { id: 2, name: 'Raza' },
  ];

  return (
    
      <View>
        {Array.map(({ id, name }) => (
          <View key={id} style={{ }}>
            <Text style={{ fontWeight:'bold', fontSize:25}}>{name}</Text>
          </View>
        ))}
      </View>
  );
};

export default List;

