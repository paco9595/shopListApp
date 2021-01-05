import React, {useEffect, useState, useRef} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native';
import {SearchBar, Check, AddItem, EditDropDown} from './../components';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsisV, faPen} from '@fortawesome/free-solid-svg-icons';
import {
  getListItems,
  addItem,
  updateItem,
  deletList,
  deleteItem,
  updateList,
} from './../services';

export const List = ({location, history}) => {
  const inputRef = useRef(null);
  const [user, setUser] = useState({});
  const [list, setlist] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editDropDown, setEditDropDown] = useState(false);
  const [editName, setEditName] = useState(false);
  const [inputName, setInputName] = useState('');

  useEffect(() => {
    const {idUser, _id, name} = location.state;
    setUser(location.state);
    getListItems(idUser, _id).then((list) => {
      setlist(list.item);
    });
  }, []);
  const changeHandler = (item, value) => {
    updateItem({...item, checked: value});
  };
  const addHandler = (word) => {
    const {idUser, _id} = user;
    addItem(idUser, _id, word).then((res) => {
      setlist(res.item);
    });
  };
  const deleteList = () => {
    const {idUser, _id} = location.state;
    deletList(idUser, _id).then(() => {
      history.goBack();
    });
  };
  const removeItem = (item) => {
    const {idUser, _id} = location.state;
    deleteItem(idUser, _id, item._id).then((res) => {
      console.log(res);
      setlist(res.item);
    });
  };
  const editNameHandler = async () => {
    setEditDropDown(false);
    await setEditName(true);
    setInputName(location.state.name);
    console.log(inputRef.current);
    inputRef.current.value = location.state.name;
    inputRef.current.focus();
  };
  const submitNameHandler = (event) => {
    console.log(location.state);
    updateList({
      ...location.state,
      name: event.nativeEvent.text,
    }).then((res) => {
      location.state.name = res.name;
      setEditName(false);
    });
  };
  return (
    <SafeAreaView style={styles.ViewContainer}>
      <View>
        <View style={styles.title}>
          {!editName ? (
            <Text style={styles.nameList}>{location.state.name}</Text>
          ) : (
            <TextInput
              ref={inputRef}
              style={styles.input}
              onChangeText={(word) => setInputName(word)}
              value={inputName}
              onSubmitEditing={submitNameHandler}
            />
          )}
          <FontAwesomeIcon
            icon={faEllipsisV}
            onPress={() => setEditDropDown(!editDropDown)}
          />
        </View>
        {editDropDown && (
          <EditDropDown deleteList={deleteList} editName={editNameHandler} />
        )}
        <SearchBar />
      </View>
      <View style={styles.subTitle}>
        <Text>elementos</Text>

        {list.length ? (
          <FontAwesomeIcon
            icon={faPen}
            onPress={() => setEditMode(!editMode)}
          />
        ) : null}
      </View>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.itemsContainer}>
          {list.map((i, key) => (
            <Check
              item={i}
              key={key}
              changeHandler={changeHandler}
              color={user.color}
              editMode={editMode}
              removeItem={removeItem}
            />
          ))}
          <AddItem add={addHandler} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  scroll: {
    height: 550,
  },
  ViewContainer: {
    marginHorizontal: 20,
  },
  subTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemsContainer: {
    marginVertical: 20,
  },
  nameList: {
    fontSize: 40,
  },
  input: {
    fontSize: 40,
    borderBottomColor: 'rgba(51, 51, 51, 0.5)',
    borderBottomWidth: 2,
    width: 200,
  },
});
