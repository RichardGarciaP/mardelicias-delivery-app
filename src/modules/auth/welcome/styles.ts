import { StyleSheet } from "react-native";
import { normalize } from "@/shared/helpers";
import { semantic } from "@/shared/constants/colors";

export const _styles = (isDarkMode: boolean) => StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: normalize(14),
    backgroundColor: isDarkMode ? semantic.background.dark.d500 : semantic.background.white.w500
  }
})
