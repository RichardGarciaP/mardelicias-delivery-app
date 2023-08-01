import { StyleSheet } from "react-native";
import { normalize } from "@/shared/helpers";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: normalize(24)
  },
  containerTitle: {
    marginVertical: normalize(32)
  },
  description: {
    fontSize: normalize(18)
  },
  form: {
    marginTop: normalize(98),
    marginBottom: normalize(24)
  }
})
