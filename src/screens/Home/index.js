import React, {useEffect} from 'react';

import {View, Text, ScrollView, StatusBar} from 'react-native';

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

  const onPressBook = () => {
    navigation.navigate('Book');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={theme.$background} />
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
