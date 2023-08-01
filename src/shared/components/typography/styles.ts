import {StyleSheet} from 'react-native';
import {normalize} from '../../helpers';
import {FONT} from '@/shared/constants/fonts';

export const _styles = (isDarkMode: boolean) => StyleSheet.create({
  text: {
    color: isDarkMode ? '#fff' : '#000',
    fontSize: normalize(14),
    fontFamily: FONT.NORMAL,
  },
});
