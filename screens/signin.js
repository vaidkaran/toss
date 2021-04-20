import React, { useState } from 'react';
import * as Google from 'expo-google-app-auth';
import DrawerIcon from '../components/drawerIcon';
import { View, Text, StyleSheet, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setIsSignedIn} from '../auth';

const signIn = async (navigation) => {
  const config = {
    androidClientId:
      '97966421563-vbau4nupvdunk6kpvkjbuime02f8hf4e.apps.googleusercontent.com',
    scopes: ['profile', 'email'],
    behaviour: 'web',
  };

  const res = await Google.logInAsync(config);
  if (res.type === 'success') {
    console.log('*************************************');
    // console.log(res);
    console.log('*************************************');
    await AsyncStorage.setItem('@isSignedIn', "true");
  } else {
    console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
    console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
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

  return (
    <View style={styles.container}>
      <Button title="Sign in with Google" onPress={() => signIn(navigation)} />
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
