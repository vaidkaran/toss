import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import TextHeading from '../components/textHeading';
import { Game } from "./game";

export default function ({ navigation }) {
  return (
    <View style={styles.container}>
      <TextHeading>Toss a coin?</TextHeading>
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
  }
});
