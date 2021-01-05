import React, {useEffect, useState} from 'react';
import {GoogleLoginButton, FacebookButton} from './../components';
import {StyleSheet, View, Text} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import auth from '@react-native-firebase/auth';

export const Login = ({history}) => {
  const [user, setUser] = useState();
  const [initializing, setInitializing] = useState(true);
  const onAuthStateChanged = (user) => {
    console.log('user', user);
    setUser(user);
  };
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const pressHandler = (event) => {
    history.push('/home');
  };
  return (
    <View style={styles.body}>
      <View style={styles.LogoContainer}>
        <Text style={styles.Logo}>Shop List</Text>
      </View>
      <View style={styles.buttonContainer}>
        <GoogleLoginButton pressHandler={pressHandler} />
        <View style={styles.line} />
        <FacebookButton />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    flexDirection: 'column',
    flex: 1,
  },
  LogoContainer: {
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flex: 0.5,
  },
  Logo: {
    //fontFamily: "Playball",
    fontSize: 57,
    color: '#2D9CDB',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    justifyContent: 'space-between',
    marginTop: 200,
  },
  line: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: Colors.Black,
    width: 276,
  },
});
