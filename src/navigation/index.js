import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import AuthStack from './AuthStack';
import MainBottomNavigation from './MainBottom';
import {useSelector} from 'react-redux';
import {
  selectLoginStatus,
  selectOnboardingComplete,
  selectToken,
} from '../redux/auth/selectors';
import {setToken} from '../api';

const Stack = createStackNavigator();

function MainNavigation() {
  const isLoggedIn = useSelector((state) => selectLoginStatus(state));
  const token = useSelector((state) => selectToken(state));
  const isOnbComplete = useSelector((state) => selectOnboardingComplete(state));

  if (isLoggedIn) {
    setToken(token);
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={isLoggedIn && isOnbComplete ? 'Home' : 'Auth'}>
      <Stack.Screen name="Auth" component={AuthStack} />
      <Stack.Screen name="Home" component={MainBottomNavigation} />
    </Stack.Navigator>
  );
}

function AppNavigation() {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
}

export default AppNavigation;
