import React from 'react';
import {
  MainStackNavigator,
  AboutStackNavigator,
  SigninStackNavigator,
  TaskStackNavigator,
} from '../navigation/stackNavigator';
import Signin from '../screens/signin';
import About from '../screens/about';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const MainDrawerNavigator = () => (
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={MainStackNavigator} />
    <Drawer.Screen name="About" component={AboutStackNavigator} />
    <Drawer.Screen name="TaskManagement" component={TaskStackNavigator} />
  </Drawer.Navigator>
);

const SigninDrawerNavigator = () => (
  <Drawer.Navigator initialRouteName="Signin">
    <Drawer.Screen name="Signin" component={SigninStackNavigator} />
    <Drawer.Screen name="About" component={AboutStackNavigator} />
  </Drawer.Navigator>
);

export { MainDrawerNavigator, SigninDrawerNavigator };
