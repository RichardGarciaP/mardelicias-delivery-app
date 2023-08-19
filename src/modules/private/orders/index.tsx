import React from 'react';
import Wrapper from "@/shared/components/wrapper";
import HeaderWithIcon from "@/shared/components/headerBack";
import { shoppingBag } from "@/shared/assets/icons";
import TopNavigation from "@/modules/private/orders/components/topNavigation";
import { View } from "react-native";
import {styles} from './styles'

export default function Orders() {

  return (
    <Wrapper>
      <View style={styles.container}>
        <HeaderWithIcon icon={shoppingBag} title="My Orders" />
        <TopNavigation />
      </View>
    </Wrapper>
  )
}
