import React, {useEffect} from 'react';

import {View, Text} from 'react-native';
import {MainBlock} from '../../components/Blocks';
import {HomeHeader} from '../../components/Headers';

import SplashScreen from 'react-native-splash-screen';

import styles from './styles';

function Home({navigation}) {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <View style={styles.container}>
      <HomeHeader />
      <MainBlock></MainBlock>
    </View>
  );
}

export default Home;
