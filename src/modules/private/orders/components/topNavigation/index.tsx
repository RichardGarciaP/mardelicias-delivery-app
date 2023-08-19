import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import {styles} from './styles'
import Typography from "@/shared/components/typography";
import { activeOpacity } from "@/shared/constants/global";

interface TopNavigationProps {
  id: number,
  name: string,
  active: boolean,
}
export default function TopNavigation() {
  const [tabs, setTabs] = useState<TopNavigationProps[]>([
    {
      id: 1,
      name: 'orders.progress',
      active: true,
    },
    {
      id: 2,
      name: 'orders.success',
      active: false,
    },
    {
      id: 3,
      name: 'orders.canceled',
      active: false,
    },
  ])

  function handleChange(tabSelected: TopNavigationProps) {
    setTabs(tabs.map(option => ({
      ...option,
      active: option.id === tabSelected.id
    })));
  }
  return (
    <View style={styles.container}>
      {tabs.map(tab => {
        return (
          <TouchableOpacity activeOpacity={activeOpacity} onPress={() => handleChange(tab)} style={tab.active ? styles.tabActive : styles.tab} key={tab.id}>
            <Typography style={tab.active ? styles.textActive : styles.text}>{tab.name}</Typography>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}
