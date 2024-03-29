import React, { useState } from 'react';
import Home from '../screens/home';
import Game from '../screens/game';
import Toss from '../screens/toss';
import Contact from '../screens/contact';
import About from '../screens/about';
import Result from '../screens/result';
import AddTask from '../screens/addTask';
import TaskList from '../screens/taskList';
import Signin from '../screens/signin';
import Signout from '../screens/signout';
import Autocomplete from '../screens/autocomplete';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const MainStackNavigator = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Game" component={Game} />
    <Stack.Screen name="Toss" component={Toss} />
    <Stack.Screen name="Result" component={Result} />
    <Stack.Screen name="Autocomplete" component={Autocomplete} />
  </Stack.Navigator>
);

const AboutStackNavigator = () => (
  <Stack.Navigator initialRouteName="About">
    <Stack.Screen name="About" component={About} />
    <Stack.Screen name="Contact" component={Contact} />
  </Stack.Navigator>
);

const TaskStackNavigator = () => (
  <Stack.Navigator initialRouteName="TaskList">
    <Stack.Screen name="TaskList" component={TaskList} />
  </Stack.Navigator>
);

const SigninStackNavigator = () => (
  <Stack.Navigator initialRouteName="Signin">
    <Stack.Screen name="Signin" component={Signin} />
  </Stack.Navigator>
);

const SignoutStackNavigator = () => (
  <Stack.Navigator initialRouteName="Signout">
    <Stack.Screen name="Signout" component={Signout} />
  </Stack.Navigator>
);

export { MainStackNavigator, AboutStackNavigator, TaskStackNavigator, SigninStackNavigator, SignoutStackNavigator };
