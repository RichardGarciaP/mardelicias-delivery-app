import React from 'react';
import { MOCKUP_PRODUCTS } from "@/modules/private/home/components/mostPopular";
import List from "@/shared/components/list";
import { View } from "react-native";
import CardProductHorizontal from "@/shared/components/cardProductHorizontal";

export default function ProductList() {

  function renderItem(item: any, key: number) {
    return <View style={{marginBottom: 20, flex: 1}} key={key}>
      <CardProductHorizontal actions={false} checkout product={item} />
    </View>
  }
  return (
    <List
      between
      data={MOCKUP_PRODUCTS}
      rows={1}
      renderItem={renderItem}
    />
  )
}
