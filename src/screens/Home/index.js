import React, {useEffect} from 'react';

import {View, Text} from 'react-native';
import {MainBlock} from '../../components/Blocks';

import SplashScreen from 'react-native-splash-screen';

import styles from './styles';

function Home({navigation}) {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <MainBlock>
      <Text>Home</Text>
    </MainBlock>
  );
}

export default Home;
