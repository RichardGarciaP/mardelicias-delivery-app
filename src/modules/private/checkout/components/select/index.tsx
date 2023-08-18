import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { ImageSourcePropType } from "react-native/Libraries/Image/Image";
import Typography from "@/shared/components/typography";
import Icon from "@/shared/components/icon";
import TitleSection from "@/modules/private/checkout/components/titleSection";
import { arrowBack, chevronLeft, truck } from "@/shared/assets/icons";
import { styles } from "./styles";
import { normalize } from "@/shared/helpers";
import ListOptionCard, { Option, OptionCardOptions } from "@/shared/components/ListOptionCard";
import { Button } from "@/shared/components/buttons";
import ButtonSheet from "@/shared/components/buttonSheet";

interface SelectCheckoutProps {
  title: string;
  icon: ImageSourcePropType;
  description: string;
  showChange?: boolean
  callback: any;
  value: OptionCardOptions | undefined
}
export default function Select({title, icon, description, showChange, callback, value}: SelectCheckoutProps) {

  return (
    <View style={styles.selects}>

      <TitleSection callback={callback} showChange={showChange} title={title} />

      {value ? (
        <Option option={{
          id: value.id,
          icon: value.icon,
          title: value.title,
          description: value.description,
          active: true
        }} />
      ) : (
        <TouchableOpacity onPress={callback} style={styles.containerSelect}>
          <View style={styles.row}>
            <Icon icon={icon} />
            <Typography style={styles.textShippingType}>{description}</Typography>
          </View>
          <View>
            <Icon icon={chevronLeft} />
          </View>
        </TouchableOpacity>
      )}
    </View>
  )
}
