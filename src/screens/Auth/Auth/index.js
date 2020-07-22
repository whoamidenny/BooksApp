import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, Switch, View, Dimensions} from 'react-native';
import {useDispatch} from 'react-redux';

import {DefaultButton} from '../../../components/Buttons';
import {MainBlock} from '../../../components/Blocks';

import styles from './styles';
import {translate} from '../../../i18n';
import {themeActions} from '../../../redux/themes';

import Logo from '../../../assets/images/logo.svg';
import {scaledSize} from '../../../styles';

function Auth({navigation}) {
  const [isActive, changeTheme] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const themeName = isActive ? 'dark' : 'light';
    dispatch(themeActions.changeThemeMode(themeName));
  }, [isActive]);

  function onPressLogin() {
    navigation.navigate('SignIn');
  }

  function onPressSignUp() {
    navigation.navigate('SignUp');
  }

  return (
    <MainBlock>
      <View>
        <Switch value={isActive} onValueChange={() => changeTheme(!isActive)} />
      </View>
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
