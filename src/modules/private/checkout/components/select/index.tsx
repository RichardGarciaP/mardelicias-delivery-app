import React from 'react';
import { TouchableOpacity, View } from "react-native";
import { ImageSourcePropType } from "react-native/Libraries/Image/Image";
import Typography from "@/shared/components/typography";
import Icon from "@/shared/components/icon";
import TitleSection from "@/modules/private/checkout/components/titleSection";
import { chevronLeft, truck } from "@/shared/assets/icons";
import { styles } from "./styles";

interface SelectCheckoutProps {
  title: string;
  icon: ImageSourcePropType;
  description: string;
}
export default function Select({title, icon, description}: SelectCheckoutProps) {

  return (
    <View style={styles.selects}>

      <TitleSection title={title} />

      <View style={styles.containerSelect}>
        <View style={styles.row}>
          <Icon icon={icon} />
          <Typography style={styles.textShippingType}>{description}</Typography>
        </View>
        <TouchableOpacity>
          <Icon icon={chevronLeft} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
