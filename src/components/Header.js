import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import {withRouter} from 'react-router-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleDoubleLeft} from '@fortawesome/free-solid-svg-icons';

const Header = ({location, history}) => {
  const [showHeader, setShowHeader] = useState(false);
  const [showArrow, setShowArrow] = useState(false);
  useEffect(() => {
    if (location.pathname != '/') {
      setShowHeader(true);
      if (location.pathname.includes('/List')) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    } else {
      setShowHeader(false);
    }
  }, [location]);

  return (
    <>
      {showHeader && (
        <SafeAreaView style={styles.headerContainer}>
          {showArrow && (
            <TouchableOpacity
              style={styles.backButtonContainer}
              onPress={() => history.goBack()}>
              <FontAwesomeIcon size={25} icon={faAngleDoubleLeft} />
            </TouchableOpacity>
          )}
          <Text style={styles.Logo}>Shop List</Text>
        </SafeAreaView>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    marginHorizontal: 20,
    flexDirection: 'row',
  },
  Logo: {
    fontSize: 40,
    color: '#2D9CDB',
    //fontFamily: 'Playball',
  },
  icon: {
    alignItems: 'center',
    fontSize: 30,
  },
  backButtonContainer: {
    justifyContent: 'center',
    marginRight: 20,
  },
});
export default withRouter(Header);
