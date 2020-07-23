import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

import Auth from '../screens/Auth/Auth';
import SignIn from '../screens/Auth/SignIn';
import SignUp from '../screens/Auth/SignUp';
import {scaledSize} from '../styles';
import ForgetPassword from '../screens/Auth/ForgetPassword';
import Onboarding from '../screens/Onboarding';

const Stack = createStackNavigator();

export default function AuthStack() {
  const theme = useSelector((state) => state.theme);
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: '',
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: theme.$background,
          shadowColor: 'transparent',
          elevation: 0,
        },
        headerLeftContainerStyle: {
          marginLeft: scaledSize(60),
        },
        headerTintColor: theme.$backButton,
      }}>
      <Stack.Screen
        name="Auth"
        component={Auth}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
}
