import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import TextHeading from '../components/textHeading';
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

export default function ({ navigation }) {
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
  return (
    <View style={styles.container}>
      <View style={styles.toss}>
        <TextHeading>Toss a coin?</TextHeading>
        <Button
          title={"Let's go for it"}
          onPress={() => navigation.push('Game')}
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
    marginHorizontal: 2
  }
});
