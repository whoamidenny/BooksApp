import React, {useEffect} from 'react';

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
import {catalogActions} from '../../redux/catalog';

function Home({navigation}) {
  const loading = useSelector((state) => errorSelectors.selectLoading(state));
  const dispatch = useDispatch();

  useEffect(() => {
    SplashScreen.hide();
    dispatch(catalogActions.getBooks());
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

  return !loading ? (
    <View style={styles.container}>
      <HomeHeader navigation={navigation} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.contentContainerStyle}>
        <HorizontalBooksList onPressBook={(index) => onPressBook(index)} />
        <HorizontalTagsList />
        <HorizontalSmallBooksList />
      </ScrollView>
    </View>
  ) : (
    <Loader />
  );
}

export default Home;
