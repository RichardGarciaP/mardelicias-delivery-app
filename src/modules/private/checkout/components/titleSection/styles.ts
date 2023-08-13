import { StyleSheet } from "react-native";
import { normalize } from "@/shared/helpers";

export const styles = StyleSheet.create({
  containerSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  titleSection: {
    fontSize: normalize(16),
    fontWeight: '700'
  },
})
