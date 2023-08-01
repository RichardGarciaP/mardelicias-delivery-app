import {StyleSheet} from 'react-native';
import {normalize} from '@/shared/helpers';
import {semantic} from '@/shared/constants/colors';

export const _styles = (isFocus: boolean, isDarkMode: boolean) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderRadius: normalize(8),
      backgroundColor: isDarkMode ? semantic.fill.f01 : semantic.fill.f04,
      paddingHorizontal: normalize(12),
      paddingVertical: normalize(12),
      marginTop: normalize(8),
    },
    input: {
      flex: 1,
      padding: normalize(8),
      color: isDarkMode ? semantic.text.white : semantic.text.black,
      fontSize: normalize(14)
    },
    label: {
      fontSize: normalize(16),
      fontWeight: '500',
      color: isDarkMode ? semantic.text.grey : semantic.text.black
    }
  });
