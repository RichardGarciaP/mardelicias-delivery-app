import React from 'react';
import Wrapper from "@/shared/components/wrapper";
import { ScrollView, View } from "react-native";
import HeaderWithIcon from "@/shared/components/headerBack";
import ListOptionCard from "@/shared/components/ListOptionCard";
import { location } from "@/shared/assets/icons";
import { Button, ButtonOutline } from "@/shared/components/buttons";
import { normalize } from "@/shared/helpers";

export default function Checkout() {
  return (
    <View style={{flex: 1, paddingHorizontal: normalize(24), backgroundColor: 'white'}}>
      <Wrapper>
        <View>
          <HeaderWithIcon title="Check Out" />
          <ListOptionCard options={
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

          <ButtonOutline title="Add New Address" />
        </View>
      </Wrapper>
      <Button title="Confirm Address" />
      <View style={{height: normalize(40)}} />
    </View>
  )
}
