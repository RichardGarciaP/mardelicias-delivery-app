import { StyleSheet, ViewStyle } from "react-native";
import { palette, semantic } from "@/shared/constants/colors";
import { normalize } from "@/shared/helpers";

const defaultContainer: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: normalize(12),
  borderWidth: 2,
  borderRadius: normalize(16),
  marginVertical: normalize(12)
}
export const _styles = (isDarkMode: boolean, active: boolean) => StyleSheet.create({
  container: {
    ...defaultContainer,
    borderColor: active ? palette.main.p500 : isDarkMode ? semantic.fill.f01 : semantic.fill.f04,
  },
  containerActive: {
    ...defaultContainer,
    borderColor: palette.main.p400,
  },
  containerIcon: {
    backgroundColor: isDarkMode ? semantic.fill.f01 : semantic.fill.f04,
    borderRadius: normalize(16),
    width: normalize(64),
    height: normalize(64),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: normalize(12)
  },
  icon: {
    width: normalize(32),
    height: normalize(32),
    tintColor: isDarkMode ? semantic.background.white.w500 : semantic.text.grey
  },
  title: {
    fontSize: normalize(16),
    fontWeight: '700'
  },
  address: {
    color: semantic.text.grey
  },
  containerInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontWeight: '700',
    marginRight: normalize(12)
  }
})
