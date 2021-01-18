import React from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function ({ onPress }) {
  return (
    <Ionicons
      name="ios-menu"
      size={24}
      color="black"
      onPress={onPress}
    />
  );
}
