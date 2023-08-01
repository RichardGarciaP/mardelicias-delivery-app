import React from "react";
import Hero from "@/modules/auth/welcome/components/hero";
import { View } from "react-native";
import { Button, ButtonOutline } from "@/shared/components/buttons";
import { styles } from './styles'

export default function Welcome() {

  return (
    <View style={styles.container}>
      <Hero />

      <View style={styles.body}>
        <Button title="Login" />
        <View style={{marginVertical: 10}} />
        <ButtonOutline title="Sign Up" />
      </View>
    </View>
  )
}
