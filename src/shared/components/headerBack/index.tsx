import React from 'react';
import { TouchableOpacity, View } from "react-native";
import Icon from "@/shared/components/icon";
import { arrowBack } from "@/shared/assets/icons";
import Typography from "@/shared/components/typography";
import {styles} from './styles'

interface HeaderBackProps {
  title?: string;
  icon?: React.ReactNode | undefined;
}
export default function HeaderWithIcon({title, icon}: HeaderBackProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        {icon ? icon : (
          <Icon icon={arrowBack} />
        )}
      </TouchableOpacity>
      {title && (
        <Typography style={styles.title}>{title}</Typography>
      )}
    </View>
  )
}
