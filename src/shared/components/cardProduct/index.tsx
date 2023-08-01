import React from 'react';
import { Image, View } from "react-native";
import Typography from "@/shared/components/typography";
import { currencyType } from "@/shared/constants/global";
import {_styles} from './styles'
import useDarkMode from "@/shared/hooks/useDarkMode";

export default function CardProduct({product}: any) {
  const {isDarkMode} = useDarkMode()
  const styles = _styles(isDarkMode)
  return (
    <View style={styles.container}>
        <View style={styles.containerImage}>
          <Image style={styles.image} resizeMode="contain" source={{uri: product.image}} />
        </View>

        <View>
          <Typography style={styles.name} translate={false}>{product.name}</Typography>
          <Typography style={styles.category} translate={false}>{product.category}</Typography>
          <Typography style={styles.price} translate={false}>{currencyType} {product.price.toFixed(2)}</Typography>
        </View>
    </View>
  )
}
