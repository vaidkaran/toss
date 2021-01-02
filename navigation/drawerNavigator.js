import React from 'react';
import {
  MainStackNavigator,
  AboutStackNavigator,
} from '../navigation/stackNavigator';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const MainDrawerNavigator = () => (
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={MainStackNavigator} />
    <Drawer.Screen name="About" component={AboutStackNavigator} />
  </Drawer.Navigator>
);

export { MainDrawerNavigator };
