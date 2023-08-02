import React from "react";
import { TouchableOpacity, View } from "react-native";
import Icon from "@/shared/components/icon";
import { arrowBack, like } from "@/shared/assets/icons";
import Typography from "@/shared/components/typography";
import {styles} from './styles'
import { useNavigation } from "@react-navigation/native";

export default function Header() {
  const {goBack} = useNavigation()
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBack}>
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
