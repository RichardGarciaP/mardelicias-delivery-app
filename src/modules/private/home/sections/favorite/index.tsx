import React from "react";
import Wrapper from "@/shared/components/wrapper";
import { ScrollView, TouchableOpacity, View } from "react-native";
import HeaderWithIcon from "@/shared/components/headerBack";
import {styles} from './styles'
import List from "@/shared/components/list";
import { MOCKUP_PRODUCTS } from "@/modules/private/home/components/mostPopular";
import CardProduct from "@/shared/components/cardProduct";
import Typography from "@/shared/components/typography";
import Icon from "@/shared/components/icon";
import { sort } from "@/shared/assets/icons";

export default function Favorite() {

  function renderItem(item: any, key: number) {
    return <View key={key} style={{marginRight: 4}}><CardProduct product={item} /></View>
  }
  return (
    <Wrapper>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <HeaderWithIcon title={"home.favorites"} />

        <View style={styles.containerInfo}>
          <View style={styles.row}>
            <Typography style={styles.total} translate={false}>{MOCKUP_PRODUCTS.length}</Typography>
            <View style={styles.separator} />
            <Typography style={styles.total}>{"general.plant"}</Typography>
          </View>

          <TouchableOpacity style={styles.row}>
            <Typography style={styles.sort}>{"general.sort"}</Typography>
            <View style={styles.separator} />
            <Icon icon={sort} />
          </TouchableOpacity>
        </View>

        <View>
          <List
            between
            data={MOCKUP_PRODUCTS}
            rows={2}
            renderItem={renderItem}
          />
        </View>
      </ScrollView>
    </Wrapper>
  )
}
