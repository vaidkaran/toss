import React, { useState, useContext } from 'react';
import * as Google from 'expo-google-app-auth';
import DrawerIcon from '../components/drawerIcon';
import TextHeading from '../components/textHeading';
import { View, Text, StyleSheet, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {setIsSignedIn} from '../auth';
import AuthContext from '../context/auth';
import * as firebase from 'firebase';

const signIn = async (navigation, isSignedIn, setIsSignedIn) => {
  const config = {
    androidClientId:
      '97966421563-vbau4nupvdunk6kpvkjbuime02f8hf4e.apps.googleusercontent.com',
    scopes: ['profile', 'email'],
    behaviour: 'web',
  };

  const res = await Google.logInAsync(config);
  if (res.type === 'success') {
    await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    const credential = firebase.auth.GoogleAuthProvider.credential(res.idToken, res.accessToken);
    const googleProfileData = await firebase.auth().signInWithCredential(credential);
    // const idToken = await firebase.auth().currentUser.getIdToken();
    // console.log('*****************************', idToken);

    // await AsyncStorage.setItem('@currentUser', JSON.stringify(firebase.auth.currentUser, null, 2));
    setIsSignedIn(true);
  } else {
    console.log('xxxxxx Google sign in failed xxxxxxxx');
  }
};

export default function ({ navigation }) {
  React.useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <DrawerIcon onPress={()=>navigation.openDrawer()}/>
      ),
    });
  }, [navigation]);
  const { isSignedIn, setIsSignedIn } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Button title="Sign in with Google" onPress={() => signIn(navigation, isSignedIn, setIsSignedIn)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toss: {
    flex: 1,
    width: '100%',
    backgroundColor: '#D3D3D3',
    textAlignVertical: 'top',
    justifyContent: 'center',
  },
  counterWrapper: {
    flex: 1,
    width: '100%',
    backgroundColor: '#C0C0C0',
    justifyContent: 'center',
  },
  counterButtonsWrapper: {
    flexDirection: 'row',
  },
  counterButton: {
    marginHorizontal: 2,
  },
});
