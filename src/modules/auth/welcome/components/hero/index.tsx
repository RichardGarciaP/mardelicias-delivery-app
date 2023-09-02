import React from "react";
import { ImageBackground, Image } from "react-native";
import heroImage from './assets/hero.png';
import logo from './assets/Logo.png';
import Typography from "@/shared/components/typography";
import { styles } from "./styles";

export default function Hero() {
  return (
    <ImageBackground style={styles.hero} source={heroImage}>
      <Image resizeMode="contain" style={styles.logo} source={logo} />
      <Typography style={styles.text}>{"general.welcome_message"}</Typography>
    </ImageBackground>
  )
}
