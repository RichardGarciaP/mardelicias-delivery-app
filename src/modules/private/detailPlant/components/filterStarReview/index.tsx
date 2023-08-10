import React, { useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import Typography from "@/shared/components/typography";
import Icon from "@/shared/components/icon";
import { star } from "@/shared/assets/icons";
import {styles} from './styles'

export default function FilterStarReview() {
  const [stars, setStars] = useState(
    [
      {
        id: '1',
        label: 'All',
        active: true
      },
      {
        id: '2',
        label: '5',
        active: false
      },
      {
        id: '3',
        label: '4',
        active: false
      },
      {
        id: '4',
        label: '3',
        active: false
      },
      {
        id: '5',
        label: '2',
        active: false
      },
      {
        id: '6',
        label: '1',
        active: false
      },
    ]
  )

  function onChangeSelect(optionId: string) {
    setStars(stars.map(star => {
      if (star.id === optionId) {
        return {
          ...star,
          active: true
        }
      }

      return {
        ...star,
        active: false
      }
    }))
  }
  return (
    <ScrollView style={styles.container} horizontal showsHorizontalScrollIndicator={false}>
      {stars.map(starOption => (
        <TouchableOpacity key={starOption.id} onPress={() => onChangeSelect(starOption.id)} style={starOption.active ? styles.optionActive : styles.option}>
          <Icon customStyles={starOption.active ? styles.iconActive : styles.icon} icon={star} />
          <Typography style={starOption.active ? styles.textActive : styles.text}>{starOption.label}</Typography>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}
