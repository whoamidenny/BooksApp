import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

import Auth from '../screens/Auth/Auth';
import SignIn from '../screens/Auth/SignIn';
import SignUp from '../screens/Auth/SignUp';
import {scaledSize} from '../styles';
import ForgetPassword from '../screens/Auth/ForgetPassword';
import Onboarding from '../screens/Onboarding';
import PreloadTab from './PreloadTab';

import globalStyles from '../styles/globalStyles';

import {selectAuthOrPreload} from '../redux/auth/selectors';

const Stack = createStackNavigator();

export default function AuthStack() {
  const theme = useSelector((state) => state.theme);

  const startFromAuth = useSelector((state) => selectAuthOrPreload(state));

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Stack.Navigator
      //initialRouteName="Preload"
      screenOptions={{
        headerTitle: '',
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: theme.$background,
          shadowColor: 'transparent',
          elevation: 0,
        },
        headerLeftContainerStyle: {
          marginHorizontal: scaledSize(60),
          //marginRight: scaledSize(60),
        },
        headerTintColor: theme.$backButton,
      }}
      initialRouteName={startFromAuth ? 'Preload' : 'Auth'}>
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
      <Stack.Screen
        name="Preload"
        component={PreloadTab}
        options={({navigation}) => {
          return {
            gestureEnabled: false,
            headerRight: () => (
              <View style={{marginRight: scaledSize(60)}}>
                <Text
                  style={globalStyles.headerSmallText}
                  onPress={() => {
                    navigation.navigate('Home');
                  }}>
                  SKIP
                </Text>
              </View>
            ),
          };
        }}
      />
    </Stack.Navigator>
  );
}
