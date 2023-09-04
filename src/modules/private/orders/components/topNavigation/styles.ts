import { StyleSheet, ViewStyle } from "react-native";
import { palette, semantic } from "@/shared/constants/colors";
import { normalize } from "@/shared/helpers";

const tabDefault: ViewStyle = {

}
export const _styles = (isDarkMode: boolean) => StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: normalize(16),
    backgroundColor: isDarkMode ? semantic.fill.f01 : semantic.fill.f04,
    flex: 1,
    marginVertical: normalize(32),
  },
  tab: {
    paddingVertical: normalize(12),
    paddingHorizontal: normalize(10),
    flex: 1,
  },
  tabActive: {
    flex: 1,
    backgroundColor: palette.main.p500,
    paddingVertical: normalize(12),
    paddingHorizontal: normalize(10),
    borderRadius: normalize(16)
  },
  text: {
    fontSize: normalize(18),
    color: semantic.text.grey,
    textAlign: 'center'
  },
  textActive: {
    fontSize: normalize(18),
    color: semantic.text.white,
    textAlign: 'center',
    fontWeight: '700'
  }
})
