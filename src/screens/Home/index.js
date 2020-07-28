import React, {useEffect} from 'react';

import {View, Text} from 'react-native';

import {HomeHeader} from '../../components/Headers';
import {HorizontalBooksList} from '../../components/Lists';

import SplashScreen from 'react-native-splash-screen';

import styles from './styles';

function Home({navigation}) {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <View style={styles.container}>
      <HomeHeader />
      <View style={styles.contentContainerStyle}>
        <HorizontalBooksList />
        <HorizontalBooksList />
      </View>
    </View>
  );
}

export default Home;
