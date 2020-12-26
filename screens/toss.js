import { NavigationHelpersContext } from '@react-navigation/native';
import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import TextHeading from '../components/textHeading';

export default function ({ navigation, route }) {
  const {sideChosen} = route.params;
  return (
    <View style={styles.container}>
      <TextHeading>You chose {JSON.stringify(sideChosen)}</TextHeading>
      <View style={styles.button}>
        <Button title={'Toss'} onPress={() => navigation.navigate('Result', { sideChosen })}/>
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