import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Card, SearchBar, AddList} from '../components';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {getList, postList} from './../services';

export const Home = ({history}) => {
  const [cards, setCards] = useState([]);
  const [addListState, setAddListState] = useState(false);
  useEffect(() => {
    getList('5fa97e93a98f65199028c719').then((items) => {
      setCards(items);
    });
  }, []);

  const pressHandler = (item) => {
    console.log(item);
    history.push('/List', item);
  };
  const submitList = (name, color) => {
    postList({
      idUser: '5fa97e93a98f65199028c719',
      name,
      items: [],
      color,
    }).then((res) => {
      setCards(res);
      setAddListState(false);
    });
  };
  return (
    <SafeAreaView style={styles.ViewContainer}>
      <SearchBar />
      <View style={styles.subTitle}>
        <Text>Listas</Text>
        <TouchableOpacity
          style={styles.addContainer}
          onPress={() => setAddListState(!addListState)}>
          <FontAwesomeIcon
            icon={faPlusCircle}
            color={'#2D9CDB'}
            style={styles.addIcon}
          />
          <Text>Agregar Lista</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        <ScrollView style={styles.scroll}>
          <View>
            {addListState && (
              <AddList
                submitList={submitList}
                cancel={() => setAddListState(false)}
              />
            )}
            {cards.map((i, key) => (
              <Card item={i} key={key} pressHandler={pressHandler} />
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ViewContainer: {
    marginHorizontal: 20,
  },
  subTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardsContainer: {
    marginTop: 30,
    paddingBottom: 50,
    marginBottom: 50,
  },
  addContainer: {
    flexDirection: 'row',
  },
  addIcon: {
    marginRight: 5,
  },
  scroll: {
    maxHeight: 500,
  },
});
