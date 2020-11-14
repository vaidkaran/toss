import React, { useState } from 'react';
import { Button, Alert, StyleSheet, View } from 'react-native';
import TextHeading from '../components/textHeading';

export default function (props) {
  function alertHandler(side) {
    // console.log(`---- ${props.sideSelectHandler}---`);
    // console.log('hello');
    Alert.alert('', `You're choosing ${side}`, [
      {
        onPress: () => props.sideSelectHandler(side),
        text: 'Confirm',
      },
      {
        text: 'Cancel',
      },
    ], {cancelable: true});
  }

  return (
    <View style={styles.container}>
      <TextHeading> Choose a side </TextHeading>
      <View style={styles.separator} />
      <View style={styles.buttonContainer}>
        <Button title={'Heads'} onPress={() => alertHandler('Heads')} />
        <Button title={'Tails'} onPress={() => alertHandler('Tails')} />
        <Button title={'X'} color="red" onPress={props.endGameHandler} />
      </View>
      <View style={styles.cancelButton}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: 20,
  },
  separator: {
    height: 10,
  },
});
