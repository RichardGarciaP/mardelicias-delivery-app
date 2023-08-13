import { StyleSheet } from "react-native";
import { normalize } from "@/shared/helpers";
import { semantic } from "@/shared/constants/colors";

export const styles = StyleSheet.create({
  body: {
    marginVertical: normalize(20)
  },
  containerSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  titleSection: {
    fontSize: normalize(16),
    fontWeight: '700'
  },
  selects: {
    marginTop: normalize(24)
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textShippingType: {
    marginLeft: normalize(12),
    fontWeight: '700'
  },
  resume: {
    borderWidth: 2,
    borderColor: semantic.fill.f04,
    borderRadius: normalize(16),
    paddingVertical: normalize(20),
    paddingHorizontal: normalize(12),
    marginTop: normalize(32)
  }
})
