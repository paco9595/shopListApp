import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';

export const AddItem = (props) => {
  const [inputState, setInputState] = useState(false);
  const addItemRef = useRef(null);

  const pressHandler = async (evnet) => {
    await setInputState(true);
    addItemRef.current.focus();
  };
  const submit = (event) => {
    console.log('submit', event.nativeEvent);
    setInputState(false);
    props.add(event.nativeEvent.text);
  };
  return (
    <>
      {inputState ? (
        <View style={styles.addItemContainer}>
          <CheckBox
            disabled={true}
            boxType="square"
            hideBox={false}
            // onValueChange={changeHandler}
            value={false}
            tintColor={'rgba(51,51,51,0.5)'}
            onCheckColor={'rgba(51,51,51,0.5)'}
            onTintColor={'rgba(51,51,51,0.5)'}
            style={styles.checkbox}
          />
          <View style={styles.optionsContainer}>
            <TextInput
              //onChangeText={changeHandelr}
              placeholder="agregar"
              style={styles.input}
              ref={addItemRef}
              onSubmitEditing={submit}
            />
          </View>
        </View>
      ) : (
        <TouchableOpacity
          style={styles.addContainer}
          onPress={pressHandler}
          onBlur={setInputState}>
          <FontAwesomeIcon
            icon={faPlusCircle}
            color={'#2D9CDB'}
            style={styles.icon}
          />
          <Text>add item</Text>
        </TouchableOpacity>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  checkbox: {
    width: 20,
    height: 20,
    marginRight: 20,
  },
  addItemContainer: {
    flexDirection: 'row',
  },
  optionsContainer: {
    marginLeft: 0,
  },
  input: {
    borderBottomColor: 'rgba(51, 51, 51, 0.5)',
    borderBottomWidth: 2,
    width: 200,
  },
  addContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 5,
  },
});
