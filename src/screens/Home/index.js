import React, {useEffect} from 'react';

import {View, Text, ScrollView, StatusBar, Platform} from 'react-native';

import {HomeHeader} from '../../components/Headers';
import {
  HorizontalBooksList,
  HorizontalSmallBooksList,
  HorizontalTagsList,
} from '../../components/Lists';

import SplashScreen from 'react-native-splash-screen';

import styles from './styles';
import {useSelector, useDispatch} from 'react-redux';
import {catalogActions} from '../../redux/catalog';

function Home({navigation}) {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const dark = useSelector((state) => state.theme);

  useEffect(() => {
    SplashScreen.hide();
    getCatalogs();
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if (Platform.OS === 'android') {
        StatusBar.setBackgroundColor(theme.$libraryHeader);
      }
      StatusBar.setBarStyle('light-content');
    });
    return unsubscribe;
  }, [navigation]);

  const getCatalogs = () => {
    dispatch(catalogActions.getCategories());
    dispatch(catalogActions.getGenres());
    dispatch(catalogActions.getAuthors());
    dispatch(catalogActions.getBooks());
  };

  const onPressBook = () => {
    navigation.navigate('Book');
  };

  return (
    <View style={styles.container}>
      <HomeHeader navigation={navigation} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.contentContainerStyle}>
        <HorizontalBooksList onPressBook={onPressBook} />
        <HorizontalTagsList />
        <HorizontalSmallBooksList />
      </ScrollView>
    </View>
  );
}

export default Home;
