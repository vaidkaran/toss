import React, { useState } from 'react';
import { StyleSheet, Button } from 'react-native';
import Home from './screens/home';
import Game from './screens/game';
import Toss from './screens/toss';
import Result from './screens/result';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { MainDrawerNavigator } from './navigation/drawerNavigator';

import { Provider } from 'react-redux';
import configureStore from './store';

const store = configureStore();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainDrawerNavigator />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'silver',
  },
});
