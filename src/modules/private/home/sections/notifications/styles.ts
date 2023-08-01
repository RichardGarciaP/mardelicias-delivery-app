import { StyleSheet } from "react-native";
import { normalize } from "@/shared/helpers";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: normalize(24),
  },
  title: {
    fontWeight: '700',
    fontSize: normalize(16)
  },
  body: {
    marginTop: normalize(32)
  }
})
