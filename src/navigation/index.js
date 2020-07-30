import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import AuthStack from './AuthStack';
import MainBottomNavigation from './MainBottom';

const Stack = createStackNavigator();

function MainNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Auth">
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
