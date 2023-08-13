import React from 'react';
import { View } from "react-native";
import { Option } from "@/shared/components/ListOptionCard";
import TitleSection from "@/modules/private/checkout/components/titleSection";
import { location } from "@/shared/assets/icons";

export default function AddressSelect() {

  return (
    <View>
      <TitleSection title={"general.address"} />
      <Option option={{
        id: '1',
        icon: location,
        title: 'Home',
        description: 'Snow Street, San Francisco, California 42343',
        active: true
      }} />
    </View>
  )
}
