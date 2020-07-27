import React, {useEffect} from 'react';
import {Text, View, ImageBackground} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import {DefaultButton} from '../../../components/Buttons';
import {MainBlock} from '../../../components/Blocks';

import styles from './styles';

import Logo from '../../../assets/images/logo.svg';
import {scaledSize} from '../../../styles';

import {images} from '../../../constants';

function Auth({navigation}) {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  function onPressLogin() {
    navigation.navigate('SignIn');
  }

  function onPressSignUp() {
    navigation.navigate('SignUp');
  }

  return (
    <MainBlock>
      <ImageBackground
        source={images.background}
        style={{flex: 1}}
        resizeMode="contain">
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
      </ImageBackground>
    </MainBlock>
  );
}

export default Auth;
