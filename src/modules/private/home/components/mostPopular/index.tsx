import React from "react";
import List from "@/shared/components/list";
import { View } from "react-native";
import CardProduct from "@/shared/components/cardProduct";
import Typography from "@/shared/components/typography";
import {styles} from './styles'

export const MOCKUP_PRODUCTS = [
  {
    id: '1',
    image: 'https://i.ibb.co/mzk6Zn0/Img.png',
    name: 'Variegated snake',
    category: 'Indoor',
    price: 20.00
  },
  {
    id: '3',
    image: 'https://i.ibb.co/H2HKBWK/Img-3.png',
    name: 'Strelitzia Nicolai',
    category: 'Indoor',
    price: 25.00
  },
  {
    id: '4',
    image: 'https://i.ibb.co/TbTvJpf/Img-4.png',
    name: 'Sansevieria Care',
    category: 'Indoor',
    price: 23.00
  },
  {
    id: '5',
    image: 'https://i.ibb.co/BtqZ0NQ/Img-6.png',
    name: "Lady's Bedstraw",
    category: 'Indoor',
    price: 40.00
  },
  {
    id: '2',
    image: 'https://i.ibb.co/XVKwc8Z/Img-2.png',
    name: 'Zamioculcas Zamiifolia',
    category: 'Indoor',
    price: 30.00
  },
  {
    id: '6',
    image: 'https://i.ibb.co/K9FLKC0/Img.png',
    name: 'Croton Petra',
    category: 'Indoor',
    price: 10.00
  },
]
export default function MostPopular() {

  function renderItem(item: any, key: number) {
    return <CardProduct product={item} key={key} />
  }
  return (
    <View>
      <Typography style={styles.titleSection}>{"home.most_popular"}</Typography>
      <List
        between
        data={MOCKUP_PRODUCTS}
        rows={2}
        renderItem={renderItem}
      />
    </View>
  )
}
