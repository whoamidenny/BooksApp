import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import Book from '../screens/Book';
import Author from '../screens/Author';
import Filters from '../screens/Filters';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Book" component={Book} />
      <Stack.Screen name="Author" component={Author} />
      <Stack.Screen name="Filters" component={Filters} />
    </Stack.Navigator>
  );
}

export default HomeStack;
