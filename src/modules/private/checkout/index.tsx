import React from 'react';
import { TouchableOpacity, View } from "react-native";
import Wrapper from "@/shared/components/wrapper";
import HeaderWithIcon from "@/shared/components/headerBack";
import { Option } from "@/shared/components/ListOptionCard";
import { Button } from "@/shared/components/buttons";
import { normalize } from "@/shared/helpers";
import Typography from "@/shared/components/typography";
import List from "@/shared/components/list";
import CardProductHorizontal from "@/shared/components/cardProductHorizontal";
import Icon from "@/shared/components/icon";
import { MOCKUP_PRODUCTS } from "@/modules/private/home/components/mostPopular";
import { chevronLeft, creditCardPlus, location, truck } from "@/shared/assets/icons";
import { currencyType } from "@/shared/constants/global";
import {styles} from './styles'
import AddressSelect from "@/modules/private/checkout/components/addressSelect";
import ProductList from "@/shared/components/productList";
import Select from "@/modules/private/checkout/components/select";

export default function Checkout() {

  return (
    <View style={{flex: 1, paddingHorizontal: normalize(24), backgroundColor: 'white'}}>
      <Wrapper>
        <View>
          <HeaderWithIcon title={"checkout.title"} />

          <View style={styles.body}>
            <AddressSelect />
            <ProductList />
            <Select
              title={"general.chose_payment_method"}
              description={"general.method_type"}
              icon={truck}
            />
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
