import React, { useState } from 'react';
import Home from '../screens/home';
import Game from '../screens/game';
import Toss from '../screens/toss';
import Contact from '../screens/contact';
import About from '../screens/about';
import Result from '../screens/result';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const MainStackNavigator = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Game" component={Game} />
    <Stack.Screen name="Toss" component={Toss} />
    <Stack.Screen name="Result" component={Result} />
  </Stack.Navigator>
);

const AboutStackNavigator = () => (
  <Stack.Navigator initialRouteName="About">
    <Stack.Screen name="About" component={About} />
    <Stack.Screen name="Contact" component={Contact} />
  </Stack.Navigator>
);

export { MainStackNavigator, AboutStackNavigator };
