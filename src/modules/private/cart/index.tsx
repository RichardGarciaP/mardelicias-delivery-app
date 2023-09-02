import React, { useState } from "react";
import Wrapper from "@/shared/components/wrapper";
import { ScrollView, View } from "react-native";
import HeaderWithIcon from "@/shared/components/headerBack";
import { shoppingBag } from "@/shared/assets/icons";
import CardProductHorizontal from "@/shared/components/cardProductHorizontal";
import { MOCKUP_PRODUCTS } from "@/modules/private/home/components/mostPopular";
import List from "@/shared/components/list";
import { Button, ButtonOutline } from "@/shared/components/buttons";
import { normalize } from "@/shared/helpers";
import ButtonSheet from "@/shared/components/buttonSheet";
import Typography from "@/shared/components/typography";
import {styles} from './styles'
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "@/shared/routes/stack";
import useDarkMode from "@/shared/hooks/useDarkMode";
import { semantic } from "@/shared/constants/colors";

export default function Cart() {
  const {isDarkMode} = useDarkMode()
  const {navigate} = useNavigation<NavigationProps>()
  const [openDeleteItem, setOpenDeleteItem] = useState(false)
  const [selectedProductToRemove, setSelectedProductToRemove] = useState({})
  function toggleOpenDeleteItem() {
    setOpenDeleteItem(!openDeleteItem);
  }

  function removeFormCart(product: any) {
    setSelectedProductToRemove(product)
    toggleOpenDeleteItem()
  }
  function renderItem(item: any, key: number) {
    return <View style={{marginBottom: 20, flex: 1}} key={key}>
      <CardProductHorizontal onRemoveCart={removeFormCart} product={item} />
    </View>
  }
  return (
    <View style={{flex: 1}}>
      <Wrapper>
        <View style={{flex: 1, paddingHorizontal: normalize(24)}}>
          <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1}}>
            <HeaderWithIcon icon={shoppingBag} title="cart.title" />
            <View style={{height: normalize(32)}} />
            <List
              between
              data={MOCKUP_PRODUCTS}
              rows={1}
              renderItem={renderItem}
            />
          </ScrollView>
        </View>
        <ButtonSheet onClose={toggleOpenDeleteItem} dispatch={openDeleteItem}>
          <View style={styles.bodyButtonSheet}>
            <Typography style={styles.titleButtonSheet}>{"cart.remove_cart"}</Typography>
            <View style={styles.containerProduct}>
              <CardProductHorizontal actions={false} product={selectedProductToRemove} />
            </View>

            <View style={styles.footerButtonSheet}>
              <View style={{flex: 1}}>
                <ButtonOutline onPress={toggleOpenDeleteItem} title="general.cancel" />
              </View>
              <View style={{width: 10}} />
              <View style={{flex: 1}}>
                <Button title="general.yes_remove" />
              </View>
            </View>
          </View>
        </ButtonSheet>
      </Wrapper>
      <View style={{paddingHorizontal: normalize(24), backgroundColor: isDarkMode ? semantic.background.dark.d500 : semantic.background.white.w500}}>
        <Button onPress={() => navigate('checkout')} title="Buy" />
      </View>
    </View>
  )
}
