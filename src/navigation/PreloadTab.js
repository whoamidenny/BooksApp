import React, {createContext, useState} from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import EStyleSheet from 'react-native-extended-stylesheet';

const Tab = createMaterialTopTabNavigator();

import Preload1 from '../screens/Preload/screens/Preload1';
import Preload2 from '../screens/Preload/screens/Preload2';
import Preload3 from '../screens/Preload/screens/Preload3';
import Preload4 from '../screens/Preload/screens/Preload4';
import Preload5 from '../screens/Preload/screens/Preload5';
import Preload6 from '../screens/Preload/screens/Preload6';
import Preload7 from '../screens/Preload/screens/Preload7';
import Preload8 from '../screens/Preload/screens/Preload8';

import PreloaderHeader from '../components/Headers/PreloadHeader';

export const PreloadContext = createContext({});

export default function PreloadTab() {
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <PreloadContext.Provider
      value={{
        currentPage,
        setCurrentPage,
      }}>
      <Tab.Navigator
        sceneContainerStyle={{
          backgroundColor: EStyleSheet.value('$background'),
        }}
        tabBar={(props) => (
          <PreloaderHeader
            title="Book Finder"
            subtitle="Hello! We want to make sure we find books that you will love to read, please answer the following questions so that we can pick a great book for you!"
            {...props}
          />
        )}>
        <Tab.Screen name="Preload1" component={Preload1} />
        <Tab.Screen name="Preload2" component={Preload2} />
        <Tab.Screen name="Preload3" component={Preload3} />
        <Tab.Screen name="Preload4" component={Preload4} />
        <Tab.Screen name="Preload5" component={Preload5} />
        <Tab.Screen name="Preload6" component={Preload6} />
        <Tab.Screen name="Preload7" component={Preload7} />
        <Tab.Screen name="Preload8" component={Preload8} />
      </Tab.Navigator>
    </PreloadContext.Provider>
  );
}
