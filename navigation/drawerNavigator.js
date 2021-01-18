import React from 'react';
import {
  MainStackNavigator,
  AboutStackNavigator,
  TaskStackNavigator,
} from '../navigation/stackNavigator';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const MainDrawerNavigator = () => (
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={MainStackNavigator} />
    <Drawer.Screen name="About" component={AboutStackNavigator} />
    <Drawer.Screen name="TaskManagement" component={TaskStackNavigator} />
  </Drawer.Navigator>
);

export { MainDrawerNavigator };
