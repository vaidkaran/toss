import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function (props) {
  return <Text style={{...styles.text, ...props.style}}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
    fontSize: 25,
    fontStyle: 'italic',
    marginBottom: 10
  },
});
