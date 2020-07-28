import React, {useEffect} from 'react';

import {View, Text, ScrollView} from 'react-native';

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
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.contentContainerStyle}>
        <HorizontalBooksList />
        <HorizontalBooksList />
      </ScrollView>
    </View>
  );
}

export default Home;
