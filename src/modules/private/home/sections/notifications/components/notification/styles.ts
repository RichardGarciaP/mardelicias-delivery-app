import { StyleSheet } from "react-native";
import { semantic } from "@/shared/constants/colors";
import { normalize } from "@/shared/helpers";

export const _styles = (isDarkMode: boolean) => StyleSheet.create({
  container: {
    backgroundColor: isDarkMode ? semantic.background.dark.d500 : 'white',
    shadowColor: isDarkMode ? semantic.fill.f02 : semantic.fill.f04,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.21,
    shadowRadius: 6.65,
    elevation: 9,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: normalize(12),
    borderRadius: normalize(16),
    borderWidth: normalize(2),
    borderColor: isDarkMode ? semantic.fill.f01 : semantic.fill.f04,
    padding: normalize(12),
  },
  containerInfo: {
    flex: 1,
  },
  iconContainer: {
    backgroundColor: isDarkMode ? semantic.fill.f01 : semantic.fill.f04,
    marginRight: normalize(8),
    paddingVertical: normalize(16),
    paddingHorizontal: normalize(18),
    borderRadius: normalize(16)
  },
  iconSize: {
    tintColor: isDarkMode ? semantic.background.white.w500 : semantic.background.dark.d500,
    width: normalize(32),
    height: normalize(32)
  },
  title: {
    fontWeight: '700',
    fontSize: normalize(15)
  },
  description: {
    color: semantic.text.grey,
    marginTop: normalize(8)
  }
})
