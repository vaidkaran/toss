import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import TextHeading from '../components/textHeading';
import { Ionicons } from '@expo/vector-icons';
import * as Linking from 'expo-linking';
import * as SecureStore from 'expo-secure-store';

export default function ({ navigation }) {
  const [url, setUrl] = useState('defaultUrlValue');
  const [count, setCount] = useState(0);
  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={styles.counterButtonsWrapper}>
          <View style={styles.counterButton}>
            <Button title="+1" onPress={() => setCount((c) => c + 1)} />
          </View>

          <View style={styles.counterButton}>
            <Button title="-1" onPress={() => setCount((c) => c - 1)} />
          </View>
        </View>
      ),
      headerLeft: () => (
        <Ionicons
          name="ios-menu"
          size={24}
          color="black"
          onPress={() => navigation.openDrawer()}
        />
      ),
    });
  }, [navigation]);

  const logIn = async () => {
    console.log('LOGIN button clicked');
    return (
      Linking.openURL(`https://axle-records-dev.herokuapp.com/sign_in?app_id=react_native&redirect_url=${getRedirectUrl()}`)
    );
  };

  const getRedirectUrl = () => {
    return Linking.makeUrl();
  }
  
  const logTokenInfo = async () => {
    console.log('authToken ', await SecureStore.getItemAsync('authToken'));
    console.log('clientId ', await SecureStore.getItemAsync('clientId'));
    console.log('expiry ', await SecureStore.getItemAsync('expiry'));
    console.log('uid ', await SecureStore.getItemAsync('uid'));
  }
  

  return (
    <View style={styles.container}>
      <View style={styles.toss}>
        <Button title={'Login'} onPress={logIn} />
        <Button title={'Log auth token info'} onPress={logTokenInfo} />
        <TextHeading>Toss a coin?</TextHeading>
        <Button
          title={"Let's go for it"}
          onPress={() => navigation.push('Game')}
        />
        <Button
          title={"Try Autocomplete"}
          onPress={() => navigation.push('Autocomplete')}
        />
      </View>

      <View style={styles.counterWrapper}>
        <TextHeading>Timepass counter: {count}</TextHeading>
      </View>
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
