import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';

const Tab = createBottomTabNavigator();

import Home from '../screens/Home';
import Notifications from '../screens/Notifications';
import Profile from '../screens/Profile';
import Library from './LibraryStack';

import {scaledSize} from '../styles';
import {useSelector} from 'react-redux';

function MainBottomNavigation() {
  const theme = useSelector((state) => state.theme);

  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          borderTopWidth: 0,
          backgroundColor: theme.$background,
        },
      }}
      screenOptions={{unmountOnBlur: true}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () =>
            theme.$theme === 'light' ? (
              <Image
                source={require('../assets/images/home.png')}
                style={{width: scaledSize(80), height: scaledSize(80)}}
                resizeMode="contain"
              />
            ) : (
              <Image
                source={require('../assets/images/home_b.png')}
                style={{width: scaledSize(80), height: scaledSize(80)}}
                resizeMode="contain"
              />
            ),
        }}
      />
      <Tab.Screen
        name="Library"
        component={Library}
        options={({navigation, route}) => {
          let tabBarVisible = true;

          route.state !== undefined && route.state.index !== 0
            ? (tabBarVisible = false)
            : (tabBarVisible = true);

          return {
            tabBarVisible,
            tabBarIcon: () =>
              theme.$theme === 'light' ? (
                <Image
                  source={require('../assets/images/library.png')}
                  style={{width: scaledSize(80), height: scaledSize(80)}}
                  resizeMode="contain"
                />
              ) : (
                <Image
                  source={require('../assets/images/library_b.png')}
                  style={{width: scaledSize(80), height: scaledSize(80)}}
                  resizeMode="contain"
                />
              ),
          };
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: () =>
            theme.$theme === 'light' ? (
              <Image
                source={require('../assets/images/notifications.png')}
                style={{width: scaledSize(80), height: scaledSize(80)}}
                resizeMode="contain"
              />
            ) : (
              <Image
                source={require('../assets/images/notifications_b.png')}
                style={{width: scaledSize(80), height: scaledSize(80)}}
                resizeMode="contain"
              />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () =>
            theme.$theme === 'light' ? (
              <Image
                source={require('../assets/images/profile.png')}
                style={{width: scaledSize(80), height: scaledSize(80)}}
                resizeMode="contain"
              />
            ) : (
              <Image
                source={require('../assets/images/profile_b.png')}
                style={{width: scaledSize(80), height: scaledSize(80)}}
                resizeMode="contain"
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainBottomNavigation;
