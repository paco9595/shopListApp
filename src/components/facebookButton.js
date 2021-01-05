import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const FacebookButton = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <View style={styles.iconContainer}>
          <Image
            style={styles.icon}
            source={require('../../assets/images/facebook-logo.png')}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.msg}>Log in with Google</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: 255,
    height: 65,
    backgroundColor: '#0182C4',
    borderRadius: 5,
    borderColor: '#909090',
    borderStyle: 'solid',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 44,
    height: 44,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  msg: {
    fontSize: 18,
    //fontFamily: 'Lato',
  },
});
