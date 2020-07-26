import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  Switch,
  View,
  Dimensions,
  ActivityIndicator,
} from 'react-native';

import {DefaultButton} from '../../../components/Buttons';
import {MainBlock} from '../../../components/Blocks';

import styles from './styles';

import Logo from '../../../assets/images/logo.svg';
import {scaledSize} from '../../../styles';

function Auth({navigation}) {
  function onPressLogin() {
    navigation.navigate('SignIn');
  }

  function onPressSignUp() {
    navigation.navigate('SignUp');
  }

  return (
    <MainBlock>
      <View style={styles.mainBlock}>
        <Logo height={scaledSize(695)} width={scaledSize(500)} />
      </View>
      <View style={styles.bottomBlock}>
        <DefaultButton title="Get Started" onPress={onPressSignUp} />
        <Text style={styles.hintText}>
          Already have an account?{' '}
          <Text style={styles.linkText} onPress={onPressLogin}>
            Log in
          </Text>
        </Text>
      </View>
    </MainBlock>
  );
}

export default Auth;
