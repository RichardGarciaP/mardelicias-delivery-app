import React from "react";
import { TouchableOpacity, View } from "react-native";
import Icon from "@/shared/components/icon";
import { arrowBack, like } from "@/shared/assets/icons";
import Typography from "@/shared/components/typography";
import {styles} from './styles'

export default function Header() {

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Icon icon={arrowBack} />
      </TouchableOpacity>

      <Typography style={styles.title} translate={false}>
        Variegated snake
      </Typography>

      <TouchableOpacity>
        <Icon icon={like} />
      </TouchableOpacity>
    </View>
  )
}
