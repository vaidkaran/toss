import React, { useState, useContext } from 'react';
import * as Google from 'expo-google-app-auth';
import DrawerIcon from '../components/drawerIcon';
import TextHeading from '../components/textHeading';
import { View, Text, StyleSheet, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from '../context/auth';
import * as firebase from 'firebase';

export default function () {
  const { isSignedIn, setIsSignedIn } = useContext(AuthContext);

  React.useEffect(() => {
    setIsSignedIn(false);
    firebase.auth().signOut();
  }, []);

  return <View></View>;
}
