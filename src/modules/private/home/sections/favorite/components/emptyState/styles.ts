import { StyleSheet } from "react-native";
import { normalize } from "@/shared/helpers";
import { semantic } from "@/shared/constants/colors";

export const styles = StyleSheet.create({
  container: {
    marginTop: normalize(100),
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  image: {
    width: normalize(306),
    height: normalize(299)
  },
  title: {
    textAlign: 'center',
    marginVertical: normalize(24),
    fontWeight: '700',
    fontSize: normalize(18)
  },
  description: {
    textAlign: 'center',
    color: semantic.text.grey
  }
})
