import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import TextHeading from '../components/textHeading';
import { Game } from './game';
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

export default function ({ navigation }) {
  const [count, setCount] = useState(0);
  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button title="+1" onPress={() => setCount((c) => c + 1)} />
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
  return (
    <View style={styles.container}>
      <TextHeading>{count}</TextHeading>
      {/* <TextHeading>Toss a coin?</TextHeading> */}
      <Button
        title={"Let's go for it"}
        onPress={() => navigation.push('Game')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
