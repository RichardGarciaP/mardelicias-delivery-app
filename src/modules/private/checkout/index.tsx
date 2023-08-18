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
import Select from "@/modules/private/checkout/components/select";
import ShippingSelect from "@/modules/private/checkout/components/shippingSelect";

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
            <Select
              title={"general.chose_shipping"}
              description={"general.shipping_type"}
              icon={creditCardPlus}
            />

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
          {/*<ListOptionCard options={
            [
              {
                id: '1',
                icon: location,
                title: 'Home',
                description: 'Snow Street, San Francisco, California 42343',
                active: true
              },
              {
                id: '2',
                icon: location,
                title: 'Parent House',
                description: 'Snow Street, San Francisco, California 423433123',
                active: false
              },
            ]
          } />

          <ButtonOutline title="checkout.new_address" />
          */}
        </View>
      </Wrapper>
      <Button title="checkout.confirm_address" />
      <View style={{height: normalize(40)}} />
    </View>
  )
}
