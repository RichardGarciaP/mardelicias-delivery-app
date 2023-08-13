import React from 'react';
import { View } from "react-native";
import Typography from "@/shared/components/typography";
import { styles } from "./styles";

interface TitleSectionProps {
  title: string;
}
export default function TitleSection({title}: TitleSectionProps) {
  return (
    <View style={styles.containerSection}>
      <Typography style={styles.titleSection}>{title}</Typography>
      <Typography>{"general.change"}</Typography>
    </View>
  )
}
