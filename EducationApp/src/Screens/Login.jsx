import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Colors from '../Assets/Shared/Colors';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Login = () => {
  const icon = <FontAwesome5 name={'google'} style={styles.font} />;
  return (
    <View>
      <Image source={require('../Assets/Images/Login.png')} />
      <View style={styles.login}>
        <Text
          style={{
            fontSize: 40,
            textAlign: 'center',
            fontWeight: 'bold',
            marginBottom: 10,
          }}>
          Welcome To
        </Text>
        <Text
          style={{
            fontSize: 40,
            color: '#87ceeb',
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          LearningAPP
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 20,
            marginTop: 40,
          }}>
          Login/SignUp
        </Text>
        <TouchableOpacity style={styles.button}>
          {icon}
          <Text
            style={{
              color: 'white',
              marginLeft: 10,
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            {' '}
            Sign in with Google{' '}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  login: {
    backgroundColor: '#ede8e8',
    height: '100%',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    padding: 20,
  },
  button: {
    // Colors.primry is coming from Shared folder:
    backgroundColor: Colors.primary,
    padding: 10,
    margin: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
  },
  font: {
    color: 'white',
    fontSize: 30,
    alignItems: 'center',
  },
});

export default Login;
