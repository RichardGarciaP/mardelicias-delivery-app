import React from 'react';
import { styles } from "./styles";
import { View } from "react-native";
import Typography from "@/shared/components/typography";
import { currencyType } from "@/shared/constants/global";

export default function ResumeTransaction() {
  return (
    <View style={styles.resume}>
      <View style={styles.containerResumeText}>
        <Typography>{"checkout.amount"}</Typography>
        <Typography translate={false}>{currencyType} 83.00</Typography>
      </View>
      <View style={styles.containerResumeText}>
        <Typography>{"checkout.shipping"}</Typography>
        <Typography translate={false}>-</Typography>
      </View>
      <View style={styles.containerResumeText}>
        <Typography>{"checkout.total"}</Typography>
        <Typography translate={false}>-</Typography>
      </View>
    </View>
  )
}
