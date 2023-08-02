import { StyleSheet } from "react-native";
import { normalize } from "@/shared/helpers";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: normalize(24),
  },
  containerSection: {
    marginVertical: normalize(14)
  }
})
