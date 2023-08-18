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

export default function Checkout() {

  return (
    <View style={{flex: 1, paddingHorizontal: normalize(24), backgroundColor: 'white'}}>
      <Wrapper>
        <View>
          <HeaderWithIcon title={"checkout.title"} />

          <View style={styles.body}>
            <AddressSelect />
            <ProductList />
            <ShippingSelect />
            <PaymentMethodSelect />

            <View style={styles.resume}>
              <View style={styles.containerResumeText}>
                <Typography>{"checkout.amount"}</Typography>
                <Typography translate={false}>{currencyType} 83.00</Typography>
              </View>
              <View style={styles.containerResumeText}>
                <Typography>{"checkout.shipping"}</Typography>
                <Typography translate={false}>-</Typography>
              </View>
              <View style={styles.containerResumeText}>
                <Typography>{"checkout.total"}</Typography>
                <Typography translate={false}>-</Typography>
              </View>
            </View>
          </View>
        </View>
      </Wrapper>
      <Button title="general.continue" />
      <View style={{height: normalize(40)}} />
    </View>
  )
}
