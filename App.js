import React, { useState } from 'react';
import { StyleSheet, Button, Text } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as Linking from 'expo-linking';
import { MainDrawerNavigator } from './navigation/drawerNavigator';
import { Provider } from 'react-redux';
import configureStore from './store';
import * as SecureStore from 'expo-secure-store';

const store = configureStore();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
export default function App() {
  React.useEffect(() => {
    Linking.addEventListener('url', async ({ url }) => {
      const { queryParams: { auth_token, client_id, expiry, uid} } = Linking.parse(url);
      await SecureStore.setItemAsync('authToken', auth_token);
      await SecureStore.setItemAsync('clientId', client_id);
      await SecureStore.setItemAsync('expiry', expiry);
      await SecureStore.setItemAsync('uid', uid);
    })
  }, []);
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
