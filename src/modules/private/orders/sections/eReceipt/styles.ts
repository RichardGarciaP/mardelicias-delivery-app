import { StyleSheet } from "react-native";
import { normalize } from "@/shared/helpers";
import { semantic } from "@/shared/constants/colors";


export const styles = StyleSheet.create({
  containerSection: {
    borderRadius: normalize(16),
    borderWidth: 2,
    borderColor: semantic.fill.f04,
    paddingVertical: normalize(24),
    paddingHorizontal: normalize(12),
    marginVertical: normalize(12)
  },
  status: {
    fontWeight: '700',
    color: semantic.alert.success.s500
  },
  innerSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  innerSectionMb: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: normalize(12)
  },
  innerTitleSection: {
    color: semantic.text.grey,
    fontWeight: '500'
  },
  valueInnerSection: {
    fontWeight: '700'
  }
})
