import { StyleSheet } from "react-native";
import { normalize } from "@/shared/helpers";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: normalize(24),
    fontWeight: '700'
  }
})
