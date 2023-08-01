import React from 'react';
import Wrapper from "@/shared/components/wrapper";
import { ScrollView, View } from "react-native";
import Header from "@/modules/private/home/components/header";
import Input from "@/shared/components/input";
import Icon from "@/shared/components/icon";
import { filter, search } from "@/shared/assets/icons";
import {styles} from './styles'
import SpecialOffers from "@/modules/private/home/components/specialOffers";
import Categories from "@/modules/private/home/components/categories";
import MostPopular from "@/modules/private/home/components/mostPopular";

export default function Home() {

  return (
    <Wrapper>
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
        <Header />

        <View style={styles.containerSearch}>
          <Input
            leftIcon={<Icon icon={search} />}
            rightIcon={<Icon icon={filter} />}
            placeholder="general.search"
          />
        </View>

        <SpecialOffers
          banners={
            [
              {
                image: 'https://i.ibb.co/r4Sspkt/Img.png',
                state: '2',
                name: '30% Discount',
                description: 'Get Discount for every orders, only valid for today'
              },
              {
                image: 'https://i.ibb.co/2gxjSQX/card-2.jpg',
                state: '2',
                name: '10% Discount',
                description: 'Get Discount for every orders, only valid for today'
              },
            ]
          }/>

        <View style={styles.containerSearch}>
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

        <View style={{flex: 1, paddingHorizontal: 24}}>
          <MostPopular />
        </View>
      </ScrollView>
    </Wrapper>
  )
}
