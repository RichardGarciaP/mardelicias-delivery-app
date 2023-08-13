import React, { useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import Typography from "@/shared/components/typography";
import { currencyType } from "@/shared/constants/global";
import {_styles} from './styles'
import useDarkMode from "@/shared/hooks/useDarkMode";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "@/shared/routes/stack";
import Counter from "@/shared/components/counter";
import Icon from "@/shared/components/icon";
import { trash } from "@/shared/assets/icons";

export default function CardProductHorizontal({product, onRemoveCart, checkout, actions = true}: any) {
  const {isDarkMode} = useDarkMode()
  const styles = _styles(isDarkMode)
  const [cant, setCant] = useState(1)
  const navigation = useNavigation<NavigationProps>();

  function navigateTo() {
    navigation.navigate('detailPlant')
  }
  return (
    <TouchableOpacity onPress={navigateTo} style={styles.container}>
        <View style={styles.containerImage}>
          <Image style={styles.image} resizeMode="contain" source={{uri: product.image}} />
        </View>

        <View style={styles.containerInfo}>
          <View style={styles.actions}>
            <Typography style={styles.name} translate={false}>{product.name}</Typography>
            {actions && (
              <TouchableOpacity onPress={() => onRemoveCart(product)}>
                <Icon icon={trash} />
              </TouchableOpacity>
            )}
          </View>
          {actions ? (
            <>
              <Typography style={styles.price} translate={false}>{currencyType} {product.price.toFixed(2)}</Typography>
              <Typography style={styles.category} translate={false}>Size: {product.size}</Typography>
            </>
          ) : (
            <>
              <Typography style={styles.category} translate={false}>Size: {product.size}</Typography>
              <View style={styles.containerCant}>
                <Typography
                  style={styles.price}
                  translate={false}
                >
                  {currencyType} {product.price.toFixed(2)}
                </Typography>
                {checkout && (
                  <View style={styles.cant}>
                    <Typography
                      style={styles.cantText}
                      translate={false}
                    >
                      1
                    </Typography>
                  </View>
                )}
              </View>
            </>
          )}

          {actions && (
            <View style={styles.actions}>
              <Counter onChange={(newCant) => setCant(newCant)} />
              <Typography style={styles.totalPrice} translate={false}>{currencyType} {(product.price * cant).toFixed(2)}</Typography>
            </View>
          )}
        </View>
    </TouchableOpacity>
  )
}
