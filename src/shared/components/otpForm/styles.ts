import { StyleSheet } from "react-native";
import { semantic } from "@/shared/constants/colors";
import { normalize } from "@/shared/helpers";

export const _styles = (isDarkMode: boolean) =>
  StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: isDarkMode ? semantic.background.dark.d500 : semantic.background.white.w500,
    },
    otpContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      width: '100%',
    },
    input: {
      width: normalize(50),
      height: normalize(50),
      borderRadius: normalize(8),
      backgroundColor: isDarkMode ? semantic.fill.f01 : semantic.fill.f04,
      paddingHorizontal: normalize(12),
      paddingVertical: normalize(12),
      color: isDarkMode ? 'white' : '#000',
      textAlign: 'center',
      marginHorizontal: normalize(12),
      fontSize: 24,
      fontWeight: 'bold',
    },
  });
