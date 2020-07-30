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
import {useSelector} from 'react-redux';

function Home({navigation}) {
  const theme = useSelector((state) => state.theme);
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // do something
      if (Platform.OS === 'android') {
        StatusBar.setBackgroundColor(theme.$libraryHeader);
      }
      StatusBar.setBarStyle('light-content');
    });

    return unsubscribe;
  }, [navigation]);

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
