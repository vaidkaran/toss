import React from 'react';
import { StyleSheet, Button, View } from 'react-native';
import TextHeading from '../components/textHeading';

export default function (props) {
  function getResult() {
    const revealedSide = ['Heads', 'Tails'][Math.floor(Math.random()*2)];
    const result = revealedSide === props.selectedSide ? 'Win' : 'Lose';
    return `It's ${revealedSide}. You ${result}`;
  }

  return (
    <View style={styles.container}>
      <TextHeading>{getResult()}</TextHeading>
      <View style={styles.button}>
        <Button title={'Let\'s start over'} onPress={props.restartGame}/>
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
