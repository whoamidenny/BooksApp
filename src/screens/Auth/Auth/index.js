import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, Switch, View} from 'react-native';
import {useDispatch} from 'react-redux';

import {DefaultButton} from '../../../components/Buttons';
import {MainBlock} from '../../../components/Blocks';

import styles from './styles';
import {translate} from '../../../i18n';
import {themeActions} from '../../../redux/themes';

function Auth() {
  const [isActive, changeTheme] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const themeName = isActive ? 'dark' : 'light';
    dispatch(themeActions.changeThemeMode(themeName));
  }, [isActive]);

  return (
    <MainBlock>
      <Text style={{textAlign: 'center'}}>{`Popcorn\nbooks`}</Text>

      <DefaultButton title="Get Started" />
      <View>
        <Text>Change Theme</Text>
        <Switch value={isActive} onValueChange={() => changeTheme(!isActive)} />
      </View>
    </MainBlock>
  );
}

export default Auth;
