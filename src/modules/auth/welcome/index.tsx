import React from "react";
import Hero from "@/modules/auth/welcome/components/hero";
import { View } from "react-native";
import { Button, ButtonOutline } from "@/shared/components/buttons";
import { _styles } from './styles'
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "@/shared/routes/stack";
import useDarkMode from "@/shared/hooks/useDarkMode";

export default function Welcome() {
  const navigation = useNavigation<NavigationProps>();
  const {isDarkMode} = useDarkMode()
  function navigateTo(path: any) {
    navigation.navigate(path)
  }
  const styles = _styles(isDarkMode)
  return (
    <View style={styles.container}>
      <Hero />

      <View style={styles.body}>
        <Button onPress={() => navigateTo('login')} title="Login" />
        <View style={{marginVertical: 10}} />
        <ButtonOutline onPress={() => navigateTo('createAccount')} title="Sign Up" />
      </View>
    </View>
  )
}
