import React from 'react';
import TextHeading from '../components/textHeading';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function ({ navigation }) {
  return (
    <View style={styles.container}>
      <TextHeading>9654491838</TextHeading>
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
