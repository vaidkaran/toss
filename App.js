import React, { useState } from 'react';
import { View, StyleSheet, Button, Text, RecyclerViewBackedScrollViewComponent } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as Linking from 'expo-linking';
import {
  MainDrawerNavigator,
  SigninDrawerNavigator,
} from './navigation/drawerNavigator';
import { Provider } from 'react-redux';
import configureStore from './store';
import * as SecureStore from 'expo-secure-store';
import auth from '@react-native-firebase/auth';
import { AppAuth } from 'expo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { set, isSignedIn, setIsSignedIn } from './auth';

const store = configureStore();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const printStatus = async () => {
  // console.log('++++');
  // console.log(await AsyncStorage.getItem('@isSignedIn'));
  // console.log(getIsSignedIn());

  // console.log('++++');
};

export default function App() {
  console.log('-------------');
  const [signedIn, setSignedIn] = useState(true);
  // const arr = useState(true);
  // console.log('before ----> ', arr[0]);
  console.log('before ----> ', signedIn);
  // setIsSignedIn(true);

  // AsyncStorage.setItem('@isSignedIn', "false");
  React.useEffect(() => {
  // set(setSignedIn, false);
  // console.log('after ----> ', arr[0]);
    printStatus();
  }, []);

  return (
    // <Provider store={store}>
    //   <NavigationContainer>
    //     <SigninDrawerNavigator />
    //     {/* <MainDrawerNavigator /> */}
    //   </NavigationContainer>
    // </Provider>
    <Provider store={store}>
      <NavigationContainer>
        {/* {getIsSignedIn() ? ( */}
        {/* {signedIn ? (
          <>
            <MainDrawerNavigator />
          </>
        ) : (
          <>
            <SigninDrawerNavigator />
          </>
        )} */}
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'silver',
    justifyContent: 'center',
  },
});
