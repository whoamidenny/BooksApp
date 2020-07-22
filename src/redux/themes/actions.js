import EStyleSheet from 'react-native-extended-stylesheet';
import * as types from './types';

import dark from './mode/dark';
import light from './mode/light';
import {StatusBar} from 'react-native';

const themes = {
  dark: dark,
  light: light,
};

export const changeThemeMode = (name) => {
  const theme = themes[name];

  StatusBar.setBarStyle(name === 'light' ? 'dark-content' : 'light-content');
  StatusBar.setBackgroundColor(name === 'light' ? '#f1f9ff' : '#1d2c3f');

  EStyleSheet.build(theme);

  return {
    type: types.CHANGE_THEME,
    theme,
  };
};
