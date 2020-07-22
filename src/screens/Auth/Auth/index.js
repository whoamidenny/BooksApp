import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, Switch, View} from 'react-native';
import {useDispatch} from 'react-redux';

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
    <SafeAreaView style={styles.container}>
      <Text style={{textAlign: 'center'}}>{`Popcorn\nbooks`}</Text>

      <View>
        <Text>Change Theme</Text>
        <Switch value={isActive} onValueChange={() => changeTheme(!isActive)} />
      </View>
    </SafeAreaView>
  );
}

export default Auth;
