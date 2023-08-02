import React from 'react';
import Wrapper from "@/shared/components/wrapper";
import { ScrollView, View } from "react-native";
import HeaderWithIcon from "@/shared/components/headerBack";
import { styles } from "./styles";
import Input from "@/shared/components/input";
import Icon from "@/shared/components/icon";
import { filter, search } from "@/shared/assets/icons";
import Categories from "@/shared/components/categories";
import List from "@/shared/components/list";
import { MOCKUP_PRODUCTS } from "@/modules/private/home/components/mostPopular";
import CardProduct from "@/shared/components/cardProduct";

export default function PlantList() {

  function renderItem(item: any, key: number) {
    return <View key={key} style={{marginRight: 4}}><CardProduct product={item} /></View>
  }
  return (
    <Wrapper>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <HeaderWithIcon title={"list_plant.title"} />

        <View>
          <View style={styles.containerSection}>
            <Input
              leftIcon={<Icon icon={search} />}
              rightIcon={<Icon icon={filter} />}
              placeholder="general.search"
            />
          </View>

          <View style={styles.containerSection}>
            <Categories categories={
              [
                {
                  id: '1',
                  state: '2',
                  name: 'All',
                  active: true,
                },
                {
                  id: '2',
                  state: '2',
                  name: 'Indoor'
                },
                {
                  id: '3',
                  state: '2',
                  name: 'Outdor'
                },
                {
                  id: '4',
                  state: '2',
                  name: 'Garden'
                },
              ]
            } />
          </View>

          <View style={styles.containerSection}>
            <List
              between
              data={MOCKUP_PRODUCTS}
              rows={2}
              renderItem={renderItem}
            />
          </View>
        </View>
      </ScrollView>
    </Wrapper>
  )
}
