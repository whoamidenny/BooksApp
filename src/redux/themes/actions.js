import EStyleSheet from 'react-native-extended-stylesheet';
import * as types from './types';

import dark from './mode/dark';
import light from './mode/light';
import {StatusBar, Platform} from 'react-native';

const themes = {
  dark: dark,
  light: light,
};

export const changeThemeMode = (name) => {
  const theme = themes[name];

  StatusBar.setBarStyle(name === 'light' ? 'dark-content' : 'light-content');
  Platform.OS === 'android'
    ? StatusBar.setBackgroundColor(name === 'light' ? '#f1f9ff' : '#1d2c3f')
    : null;

  EStyleSheet.build(theme);

  return {
    type: types.CHANGE_THEME,
    theme,
  };
};
