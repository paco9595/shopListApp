import React, {useState, useRef, useEffect} from 'react';
import {TextInput, View, TouchableOpacity, StyleSheet} from 'react-native';
import {ColorPicker} from './colorPicker';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons';
export const AddList = ({submitList, cancel}) => {
  const inputRef = useRef(null);
  const [color, setColor] = useState('#f44336');
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const submit = (event) => {
    console.log('word', event.nativeEvent.text);
    submitList(event.nativeEvent.text, color);
  };
  return (
    <View style={styles.addListContainer}>
      <View style={styles.inputContainer(color)}>
        <TextInput
          style={styles.input}
          ref={inputRef}
          onSubmitEditing={submit}
        />
        <ColorPicker handle={(color) => setColor(color)} color={color} />
        <TouchableOpacity style={styles.iconContiner} onPress={cancel}>
          <FontAwesomeIcon icon={faTimesCircle} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  addListContainer: {
    marginBottom: 45,
  },
  inputContainer: (color) => ({
    paddingLeft: 10,
    paddingVertical: 15,
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
    backgroundColor: color,
  }),
  input: {
    borderBottomWidth: 1,
    width: '75%',
    borderColor: 'rgba(51,51,51,0.5)',
    marginRight: 20,
  },
  iconContiner: {
    justifyContent: 'center',
    marginLeft: 10,
  },
});
