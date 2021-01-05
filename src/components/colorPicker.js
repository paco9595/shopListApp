import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const Colors = [
  '#f44336',
  '#FF6900',
  '#277da1',
  '#e91e63',
  '#3f51b5',
  '#ffc107',
];

export const ColorPicker = ({handle, color}) => {
  const [statePicker, setStatePicker] = useState(false);
  const pressHandler = (color) => {
    handle(color);
    setStatePicker(false);
  };
  return (
    <View>
      <TouchableOpacity
        style={styles.colorSelected(color)}
        onPress={() => setStatePicker(!statePicker)}
      />
      {statePicker && (
        <View style={styles.dropDown}>
          {Colors.map((color, key) => (
            <TouchableOpacity
              key={key}
              style={{...styles.colorSelected(color), marginRight: 10}}
              onPress={() => pressHandler(color)}
            />
          ))}
        </View>
      )}
    </View>
  );
};
export const styles = StyleSheet.create({
  colorSelected: (color) => ({
    borderRadius: 50,
    width: 30,
    height: 30,
    backgroundColor: color,
    borderWidth: 3,
  }),
  dropDown: {
    backgroundColor: '#fff',
    right: 0,
    top: 35,
    width: 260,
    borderRadius: 5,
    padding: 10,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOpacity: 0.6,
    shadowRadius: 4,
    position: 'absolute',
    zIndex: 3,
    elevation: 3,
    shadowOffset: {
      height: 11,
      width: 0,
    },
  },
});
