import React, { useState, createContext } from 'react';
import {
  View,
  StyleSheet,
  Button,
  Text,
  RecyclerViewBackedScrollViewComponent,
} from 'react-native';
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
// import { set, isSignedIn, setIsSignedIn } from './auth';
import AuthContext from './context/auth';

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
  // console.log('-------------');
  const [isSignedIn, setIsSignedIn] = useState(false);
  console.log('*************************************');
  console.log('before: isSignedIn ', isSignedIn);
  console.log('after: isSignedIn ', isSignedIn);
  console.log('*************************************');
  // const arr = useState(true);
  // console.log('before ----> ', arr[0]);
  // console.log('before ----> ', signedIn);
  // setIsSignedIn(true);

  // AsyncStorage.setItem('@isSignedIn', "false");
  React.useEffect(() => {
    // set(setSignedIn, false);
    // console.log('after ----> ', arr[0]);
    printStatus();
  }, []);

  return (
    // <View></View>
    // <Provider store={store}>
    //   <NavigationContainer>
    //     <SigninDrawerNavigator />
    //     {/* <MainDrawerNavigator /> */}
    //   </NavigationContainer>
    // </Provider>
    <AuthContext.Provider value={{ isSignedIn, setIsSignedIn }}>
      <NavigationContainer>
        {isSignedIn ? (
          <>
            <MainDrawerNavigator />
          </>
        ) : (
          <>
            <SigninDrawerNavigator />
          </>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'silver',
    justifyContent: 'center',
  },
});
