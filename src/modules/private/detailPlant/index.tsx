import React from 'react';
import Wrapper from "@/shared/components/wrapper";
import { Image, TouchableOpacity, View } from "react-native";
import {_styles} from './styles'
import Header from "./components/header";
import useDarkMode from "@/shared/hooks/useDarkMode";
import Typography from "@/shared/components/typography";
import Icon from "@/shared/components/icon";
import { star, shippingCart } from "@/shared/assets/icons";

export default function DetailPlant() {
  const {isDarkMode} = useDarkMode()
  const styles = _styles(isDarkMode)
  return (
    <Wrapper>
      <View style={styles.container}>
        <Header />
        <View style={styles.containerImage}>
          <Image resizeMode="contain" style={styles.image} source={{uri: 'https://i.ibb.co/5Tk0vKM/Img-1.png'}} />
        </View>

        <View style={styles.containerName}>
          <Typography style={styles.name} translate={false}>Variegated snake</Typography>
          <TouchableOpacity>
            <Icon icon={shippingCart} />
          </TouchableOpacity>
        </View>

        <View style={styles.containerCantSold}>
          <View style={styles.sold}>
            <Typography translate={false}>745</Typography>
            <View style={styles.space} />
            <Typography>Sold</Typography>
          </View>
          <View style={styles.separator} />
          <View style={styles.row}>
            <Icon customStyles={styles.sizeStar} icon={star} />
            <View style={styles.space} />
            <View style={styles.space} />
            <Typography translate={false}>4.7</Typography>
            <View style={styles.space} />
            <Typography translate={false}>(3242</Typography>
            <View style={styles.space} />
            <Typography>Review )</Typography>
          </View>
        </View>

        <View style={styles.containerDescription}>
          <Typography style={styles.descriptionTitle}>{"general.description"}</Typography>

          <Typography style={styles.description} translate={false}>
            This tropical house plant is a structural sensation within your home or office decor. It’s variegated leaves show off dark green to lighter greenish-gray horizontal bands with light yellow margins. Read More
          </Typography>
        </View>
      </View>
    </Wrapper>
  )
}
