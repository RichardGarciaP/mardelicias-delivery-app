import React from "react";
import { Image, View } from "react-native";
import emptyState from './emptyState.png'
import {styles} from './styles'
import Typography from "@/shared/components/typography";

export default function EmptyState() {
  return (
    <View style={styles.container}>
      <Image resizeMode="contain" style={styles.image} source={emptyState} />

      <View>
        <Typography style={styles.title}>{"home.favorites.empty_title"}</Typography>
        <Typography style={styles.description}>{"home.favorites.empty_description"}</Typography>
      </View>
    </View>
  )
}
