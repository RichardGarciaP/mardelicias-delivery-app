import { StyleSheet } from "react-native";
import { normalize } from "@/shared/helpers";
import { semantic } from "@/shared/constants/colors";

export const styles = StyleSheet.create({
  hero: {
    height: normalize(526),
    alignItems: 'center',
    paddingHorizontal: '10%',
  },
  logo: {
    width: normalize(300),
  },
  text: {
    fontSize: normalize(20),
    fontWeight: '700',
    textAlign: 'center',
    color: semantic.text.white
  }
})
