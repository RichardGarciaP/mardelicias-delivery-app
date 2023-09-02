import React from 'react';
import { View } from "react-native";
import Wrapper from "@/shared/components/wrapper";
import HeaderWithIcon from "@/shared/components/headerBack";
import { Button } from "@/shared/components/buttons";
import { normalize } from "@/shared/helpers";
import Typography from "@/shared/components/typography";
import { creditCardPlus, truck } from "@/shared/assets/icons";
import { currencyType } from "@/shared/constants/global";
import {styles} from './styles'
import AddressSelect from "@/modules/private/checkout/components/addressSelect";
import ProductList from "@/shared/components/productList";
import ShippingSelect from "@/modules/private/checkout/components/shippingSelect";
import PaymentMethodSelect from "@/modules/private/checkout/components/paymentMethodSelect";
import ResumeTransaction from "@/shared/components/resumeTransaction";
import useDarkMode from "@/shared/hooks/useDarkMode";
import { semantic } from "@/shared/constants/colors";

export default function Checkout() {
  const {isDarkMode} = useDarkMode()
  return (
    <View style={{flex: 1, paddingHorizontal: normalize(24), backgroundColor: isDarkMode ? semantic.background.dark.d500 : semantic.background.white.w500}}>
      <Wrapper>
        <View>
          <HeaderWithIcon title={"checkout.title"} />

          <View style={styles.body}>
            <AddressSelect />
            <ProductList />
            <ShippingSelect />
            <PaymentMethodSelect />

            <ResumeTransaction />
          </View>
        </View>
      </Wrapper>
      <Button title="general.continue" />
      <View style={{height: normalize(40)}} />
    </View>
  )
}
