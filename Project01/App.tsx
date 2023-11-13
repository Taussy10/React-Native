import React from 'react';
// View = div
// SafeAreaView: safeAreaView where you touch and click on phone make sure it should be in this order SafeAreaView, View, Text otherwise differ phones have differ safeArea for android it will work but won't work for IPhone for more detail just see pic of android and IPhone 
import {View, Text, SafeAreaView} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>
          Hello Chuha {'\n'}
          Hello Kutta
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
