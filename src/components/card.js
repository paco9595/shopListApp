import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export const Card = ({item, pressHandler}) => {
  return (
    <TouchableOpacity
      style={styles.CardContainer(item.color)}
      onPress={() => pressHandler(item)}>
      <Text style={styles.label}>{item.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  CardContainer: (color) => ({
    backgroundColor: color,
    borderRadius: 5,
    marginBottom: 20,
    zIndex: 2,
  }),
  label: {
    margin: 14,
  },
});
