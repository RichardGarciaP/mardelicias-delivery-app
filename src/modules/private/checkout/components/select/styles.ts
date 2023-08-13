import { StyleSheet } from "react-native";
import { normalize } from "@/shared/helpers";
import { semantic } from "@/shared/constants/colors";

export const styles = StyleSheet.create({
  selects: {
    marginTop: normalize(24)
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerSelect: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: semantic.fill.f04,
    borderRadius: normalize(16),
    paddingVertical: normalize(20),
    paddingHorizontal: normalize(12),
    marginTop: normalize(12)
  },
  textShippingType: {
    marginLeft: normalize(12),
    fontWeight: '700'
  },
})
