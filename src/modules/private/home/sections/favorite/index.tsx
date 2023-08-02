import React, { useState } from "react";
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
import ButtonSheet from "@/shared/components/buttonSheet";
import RadioButtons from "@/shared/components/radioButtons";
import { normalize } from "@/shared/helpers";
import EmptyState from "@/modules/private/home/sections/favorite/components/emptyState";

export default function Favorite() {

  const [openSort, setOpenSort] = useState(false)

  function toggleSort() {
    setOpenSort(!openSort)
  }
  function renderItem(item: any, key: number) {
    return <View key={key} style={{marginRight: 4}}><CardProduct product={item} /></View>
  }

  function renderListOrEmptyState() {

    if (MOCKUP_PRODUCTS.length > 0) {
      return (
        <>
          <View style={styles.containerInfo}>
            <View style={styles.row}>
              <Typography style={styles.total} translate={false}>{MOCKUP_PRODUCTS.length}</Typography>
              <View style={styles.separator} />
              <Typography style={styles.total}>{"general.plant"}</Typography>
            </View>

            <TouchableOpacity onPress={toggleSort} style={styles.row}>
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
        </>
      )
    }
    return <EmptyState />
  }
  return (
    <Wrapper>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <HeaderWithIcon title={"home.favorites.title"} />

        {renderListOrEmptyState()}
      </ScrollView>

      <ButtonSheet onClose={toggleSort} dispatch={openSort}>
          <View style={{
            padding: normalize(20)
          }}>
            <View>
              <Typography style={styles.titleSort}>Sort by</Typography>
            </View>

            <View>
                <RadioButtons
                  columns={1}
                  options={[
                    {
                      id: '1',
                      active: true,
                      CustomLabel: (
                        <Typography style={styles.flex1}>
                          Latest Saved
                        </Typography>
                      )
                    },
                    {
                      id: '2',
                      active: false,
                      CustomLabel: (
                        <Typography style={styles.flex1}>
                          Longest Saved
                        </Typography>
                      )
                    },
                    {
                      id: '3',
                      active: false,
                      CustomLabel: (
                        <Typography style={styles.flex1}>
                          Most Reviews
                        </Typography>
                      )
                    },
                    {
                      id: '4',
                      active: false,
                      CustomLabel: (
                        <Typography style={styles.flex1}>
                          Highest Price
                        </Typography>
                      )
                    },
                    {
                      id: '5',
                      active: false,
                      CustomLabel: (
                        <Typography style={styles.flex1}>
                          Lowest Price
                        </Typography>
                      )
                    },
                  ]}
                />
            </View>
          </View>
      </ButtonSheet>
    </Wrapper>
  )
}
