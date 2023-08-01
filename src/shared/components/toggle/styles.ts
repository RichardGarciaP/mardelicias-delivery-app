import {Animated, StyleSheet} from 'react-native';
import { palette, semantic } from "../../constants/colors";

export const _styles = (
  toggleWidth: number,
  isEnabled: boolean,
  translateX: Animated.Value,
  isDarkMode: boolean
) =>
  StyleSheet.create({
    container: {
      width: toggleWidth * 2,
      height: toggleWidth,
      borderRadius: toggleWidth / 2,
      backgroundColor: isEnabled
        ? palette.main.p500
        : isDarkMode ? semantic.fill.f01 : 'rgba(156, 166, 169, 0.25)',
      justifyContent: 'center',
      padding: 4,
    },
    innerContainer: {
      width: toggleWidth - 8,
      height: toggleWidth - 8,
      borderRadius: (toggleWidth - 8) / 2,
      backgroundColor: isDarkMode ? isEnabled ? 'white' : semantic.text.grey : 'white',
      // @ts-ignore
      transform: [{translateX}],
    },
  });
