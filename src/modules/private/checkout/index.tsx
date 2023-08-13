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

export default function Checkout() {
  function renderItem(item: any, key: number) {
    return <View style={{marginBottom: 20, flex: 1}} key={key}>
      <CardProductHorizontal actions={false} checkout product={item} />
    </View>
  }
  return (
    <View style={{flex: 1, paddingHorizontal: normalize(24), backgroundColor: 'white'}}>
      <Wrapper>
        <View>
          <HeaderWithIcon title={"checkout.title"} />

          <View style={styles.body}>
            <View>
              <View style={styles.containerSection}>
                <Typography style={styles.titleSection}>{"general.address"}</Typography>
                <Typography>{"general.change"}</Typography>
              </View>
              <Option option={{
                id: '1',
                icon: location,
                title: 'Home',
                description: 'Snow Street, San Francisco, California 42343',
                active: true
              }} />

              <List
                between
                data={MOCKUP_PRODUCTS}
                rows={1}
                renderItem={renderItem}
              />
            </View>

            <View style={styles.selects}>
              <View>
                <Typography style={styles.titleSection}>{"general.chose_shipping"}</Typography>
              </View>

              <View style={styles.containerSelect}>
                <View style={styles.row}>
                  <Icon icon={truck} />
                  <Typography style={styles.textShippingType}>{"general.shipping_type"}</Typography>
                </View>
                <TouchableOpacity>
                  <Icon icon={chevronLeft} />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.selects}>
              <View>
                <Typography style={styles.titleSection}>{"general.chose_payment_method"}</Typography>
              </View>

              <View style={styles.containerSelect}>
                <View style={styles.row}>
                  <Icon icon={creditCardPlus} />
                  <Typography style={styles.textShippingType}>{"general.method_type"}</Typography>
                </View>
                <TouchableOpacity>
                  <Icon icon={chevronLeft} />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.resume}>
              <View style={styles.containerSection}>
                <Typography>{"checkout.amount"}</Typography>
                <Typography translate={false}>{currencyType} 83.00</Typography>
              </View>
              <View style={styles.containerSection}>
                <Typography>{"checkout.shipping"}</Typography>
                <Typography translate={false}>-</Typography>
              </View>
              <View style={styles.containerSection}>
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
