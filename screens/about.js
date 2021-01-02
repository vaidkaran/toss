import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import TextHeading from '../components/textHeading';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function ({ navigation }) {
  React.useEffect(() => {
    navigation.setOptions({
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
      <TextHeading>Made by Karan Vaid</TextHeading>
      <Button title={"Contact"} onPress={() => navigation.navigate('Contact')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
