import { StyleSheet } from "react-native";
import { normalize } from "@/shared/helpers";

export const styles = StyleSheet.create({
  titleButtonSheet: {
    marginVertical: normalize(24),
    textAlign: 'center',
    fontSize: normalize(18),
    fontWeight: '700'
  },
  bodyButtonSheet: {
    padding: normalize(24)
  },
  containerProduct: {
    marginVertical: normalize(24),
  },
  footerButtonSheet: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: normalize(24)
  }
})
