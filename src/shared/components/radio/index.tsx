import React from 'react';
import { View } from "react-native";
import {styles} from './styles'

export default function Radio({active}: {active: boolean}) {
  console.log('active', active)
  return (
    <View style={active ? styles.containerRadioButtonActive : styles.containerRadioButton}>
      <View style={active ? styles.innerRadioButtonActive : styles.innerRadioButton} />
    </View>
  )
}
