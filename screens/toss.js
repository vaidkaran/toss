import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import TextHeading from '../components/textHeading';

export default function (props) {
  return (
    <View style={styles.container}>
      <TextHeading>Let's now flip the coin</TextHeading>
      <View style={styles.button}>
        <Button title={'Toss'} onPress={() => props.setIsTossed(true)}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    alignSelf: 'center'
  }
});