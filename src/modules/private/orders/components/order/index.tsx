import React from 'react';
import { Image, TouchableOpacity, View } from "react-native";
import Typography from "@/shared/components/typography";
import Icon from "@/shared/components/icon";
import { calendarDate, trash } from "@/shared/assets/icons";
import {_styles} from './styles'
import { currencyType } from "@/shared/constants/global";
import useDarkMode from "@/shared/hooks/useDarkMode";
import { ProductDTO } from "@/shared/DTO";
import { Button } from "@/shared/components/buttons";

interface OrderProps {
  product: ProductDTO
}
export default function Order({product}: OrderProps) {
  const {isDarkMode} = useDarkMode()
  const styles = _styles(isDarkMode)
  return (
    <View>
      <View style={styles.containerDate}>
        <Icon icon={calendarDate} />
        <Typography style={styles.date} translate={false}>Mie 26, 2023</Typography>
      </View>

      <TouchableOpacity style={styles.containerOrder}>
        <View style={styles.containerImage}>
          <Image style={styles.image} resizeMode="contain" source={{uri: product.image}} />
        </View>

        <View style={styles.containerInfo}>
          <View>
            <Typography style={styles.name} translate={false}>{product.name}</Typography>
          </View>
          <Typography style={styles.category} translate={false}>Size: {product.size} Qty: {product.cant}</Typography>
          <View style={styles.containerCant}>
            <Typography
              style={styles.price}
              translate={false}
            >
              {currencyType} {product.price.toFixed(2)}
            </Typography>
            <View style={{width: 20}} />
            <View style={{flex: 1}}>
              <Button sm title="Track Order" />
            </View>
          </View>
        </View>
      </TouchableOpacity>

    </View>
  )
}
