import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons';
export const Check = ({item, changeHandler, color, editMode, removeItem}) => {
  return (
    <View style={styles.checkboxContainer}>
      <CheckBox
        boxType="square"
        hideBox={false}
        onValueChange={(value) => changeHandler(item, value)}
        value={item.checked}
        tintColor={'#000'}
        onCheckColor={'#000'}
        onFillColor={color}
        onTintColor={'#000'}
        style={styles.checkbox}
      />
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{item.name}</Text>
        {editMode && (
          <FontAwesomeIcon
            icon={faTimesCircle}
            onPress={() => removeItem(item)}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
  },
  labelContainer: {
    marginLeft: 20,
    justifyContent: 'center',
    fontSize: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  label: {
    fontSize: 20,
    // fontFamily: 'inter',
  },
});
