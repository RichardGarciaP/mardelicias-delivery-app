import {StyleSheet} from 'react-native';
import {palette, semantic} from '@/shared/constants/colors';
import {normalize} from '@/shared/helpers';
import * as domain from "domain";

export const _styles = (disabled: boolean | undefined, isDarkMode: boolean) =>
  StyleSheet.create({
    container: {
      backgroundColor: isDarkMode ? semantic.background.dark.d500 : semantic.background.white.w500,
      paddingHorizontal: normalize(10),
      paddingVertical: normalize(16),
      borderRadius: normalize(16),
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: disabled ? semantic.background.white.w100 : palette.main.p500
    },
    text: {
      color: disabled ? semantic.background.white.w100 : palette.main.p500,
      fontWeight: '700',
      marginHorizontal: normalize(4),
      fontSize: normalize(14),
      textAlign: 'center',
      flex: 1,
    },
    icon: {
      tintColor: semantic.text.white,
      width: normalize(24),
      height: normalize(24),
    },
  });
