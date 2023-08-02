import React from 'react';
import Wrapper from "@/shared/components/wrapper";
import { Image, ScrollView, TouchableOpacity, View } from "react-native";
import {_styles} from './styles'
import Header from "./components/header";
import useDarkMode from "@/shared/hooks/useDarkMode";
import Typography from "@/shared/components/typography";
import Icon from "@/shared/components/icon";
import { star, shippingCart, shoppingBag } from "@/shared/assets/icons";
import Counter from "@/shared/components/counter";
import { currencyType } from "@/shared/constants/global";
import { Button } from "@/shared/components/buttons";

export default function DetailPlant() {
  const {isDarkMode} = useDarkMode()
  const styles = _styles(isDarkMode)
  return (
    <Wrapper>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
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

        <View style={styles.containerName}>
          <View>
            <Typography translate={false}>Size</Typography>
            <Typography style={styles.valueVariant} translate={false}>Medium</Typography>
          </View>
          <View>
            <Typography translate={false}>Plant</Typography>
            <Typography style={styles.valueVariant} translate={false}>ZZ plant</Typography>
          </View>
          <View>
            <Typography translate={false}>Hight</Typography>
            <Typography style={styles.valueVariant} translate={false}>20.5"</Typography>
          </View>
          <View>
            <Typography translate={false}>Humidnity</Typography>
            <Typography style={styles.valueVariant} translate={false}>80%</Typography>
          </View>
        </View>

        <View style={styles.containerName}>
          <Typography style={styles.quantity}>{"general.quantity"}</Typography>
          <Counter onChange={() => console.log('juga')} />
        </View>

        <View style={styles.containerName}>
          <View style={{flex: 1,}}>
            <Typography style={styles.price}>{"general.price"}</Typography>
            <Typography style={styles.total} translate={false}>{currencyType} 20.00</Typography>
          </View>
          <View style={{flex: 1}}>
            <Button leftIcon={<Icon customStyles={{tintColor: 'white'}} icon={shoppingBag} />} title={"general.buy_now"} />
          </View>
        </View>
      </ScrollView>
    </Wrapper>
  )
}
