import React from 'react';
import { TouchableOpacity, View } from "react-native";
import Icon from "@/shared/components/icon";
import { arrowBack } from "@/shared/assets/icons";
import Typography from "@/shared/components/typography";
import {styles} from './styles'
import { useNavigation } from "@react-navigation/native";

interface HeaderBackProps {
  title?: string;
  icon?: React.ReactNode | undefined;
}
export default function HeaderWithIcon({title, icon}: HeaderBackProps) {
  const {goBack} = useNavigation()
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBack}>
        <Icon icon={icon ? icon : arrowBack} />
      </TouchableOpacity>
      {title && (
        <Typography style={styles.title}>{title}</Typography>
      )}
    </View>
  )
}
