import { StyleSheet } from "react-native";
import { normalize } from "@/shared/helpers";
import { palette, semantic } from "@/shared/constants/colors";

export const _styles = (isDarkMode: boolean) => StyleSheet.create({
  container: {
    width: normalize(176),
    marginBottom: normalize(24),
  },
  containerImage: {
    width: normalize(176),
    height: normalize(215),
    backgroundColor: isDarkMode ? semantic.fill.f01 : semantic.fill.f04,
    borderRadius: normalize(16)
  },
  image: {
    width: '100%',
    height: normalize(215)
  },
  name: {
    fontSize: normalize(18),
    fontWeight: '700',
    color: isDarkMode ? semantic.text.white : semantic.text.black,
    maxHeight: normalize(50),
  },
  category: {
    fontSize: normalize(16),
    color: semantic.text.grey,
    marginVertical: normalize(8)
  },
  price: {
    color: palette.main.p500,
    fontSize: normalize(20),
    fontWeight: '700'
  }
})
