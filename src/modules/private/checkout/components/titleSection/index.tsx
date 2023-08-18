import React from 'react';
import { View } from "react-native";
import Typography from "@/shared/components/typography";
import { styles } from "./styles";

interface TitleSectionProps {
  title: string;
  callback?: any;
  showChange?: boolean;
}
export default function TitleSection({title, callback, showChange = true}: TitleSectionProps) {
  return (
    <View style={styles.containerSection}>
      <Typography style={styles.titleSection}>{title}</Typography>
      {showChange && (
        <Typography onPress={callback}>{"general.change"}</Typography>
      )}
    </View>
  )
}
