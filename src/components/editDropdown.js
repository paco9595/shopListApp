import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTrashAlt, faPen} from '@fortawesome/free-solid-svg-icons';

export const EditDropDown = ({deleteList, editName}) => {
  return (
    <View style={styles.dropDown}>
      <TouchableOpacity style={styles.option} onPress={editName}>
        <FontAwesomeIcon icon={faPen} style={styles.icon} />
        <Text>Editar Nombre</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={deleteList}>
        <FontAwesomeIcon icon={faTrashAlt} style={styles.icon} />
        <Text>Borrar Lista</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  dropDown: {
    backgroundColor: '#fff',
    right: 0,
    top: 35,
    width: 160,
    borderRadius: 5,
    padding: 10,
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
  option: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
});
