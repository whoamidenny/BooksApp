import React, {useEffect, useState} from 'react';

import {View, ScrollView, StatusBar, Platform} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import SplashScreen from 'react-native-splash-screen';

import {HomeHeader} from '../../components/Headers';
import {
  HorizontalBooksList,
  HorizontalSmallBooksList,
  HorizontalTagsList,
} from '../../components/Lists';
import Loader from '../../components/Loader';

import styles from './styles';

import {useSelector, useDispatch} from 'react-redux';
import {errorSelectors} from '../../redux/error';
import {catalogActions, selectGenres} from '../../redux/catalog';

function Home({navigation}) {
  const loading = useSelector((state) => errorSelectors.selectLoading(state));
  const genres = useSelector((state) => selectGenres(state));
  const filters = useSelector((state) => state.filters);
  const [localGenres, setLocalGenres] = useState([...genres]);
  const dispatch = useDispatch();

  function getFilterParams() {
    let params = '?';
    for (let key in filters) {
      if (filters[key].value) {
        params = params + `${key}=${filters[key].value}&`;
      }
    }
    dispatch(catalogActions.getBooks(params));
  }

  useEffect(() => {
    getFilterParams();
    SplashScreen.hide();
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if (Platform.OS === 'android') {
        StatusBar.setBackgroundColor(EStyleSheet.value('$libraryHeader'));
      }
      StatusBar.setBarStyle('light-content');
    });
    return unsubscribe;
  }, [navigation]);

  const onPressBook = (index) => {
    navigation.navigate('Book', {bookIndex: index});
  };

  const onPressGenre = (index) => {
    const innit = [...localGenres];
    localGenres[index].selected
      ? (localGenres[index].selected = false)
      : (localGenres[index].selected = true);
    setLocalGenres(innit);
  };

  return !loading ? (
    <View style={styles.container}>
      <HomeHeader navigation={navigation} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.contentContainerStyle}>
        <HorizontalBooksList onPressBook={(index) => onPressBook(index)} />
        <HorizontalTagsList
          data={localGenres}
          onPress={(index) => onPressGenre(index)}
        />
        <HorizontalSmallBooksList />
      </ScrollView>
    </View>
  ) : (
    <Loader />
  );
}

export default Home;
