import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

export const SearchBar = () => {
  const changeHandelr = (text) => {
    console.log(text);
  };
  return (
    <TextInput
      style={styles.TextInput}
      placeholder="Buscar"
      onChangeText={changeHandelr}
    />
  );
};

const styles = StyleSheet.create({
  TextInput: {
    marginVertical: 20,
    height: 40,
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 5,
    paddingLeft: 15,
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
});
