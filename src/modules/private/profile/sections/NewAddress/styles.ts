import {semantic} from '@/shared/constants/colors';
import {normalize} from '@/shared/helpers';
import {StyleSheet} from 'react-native';

export const _styles = (isDarkMode: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? semantic.background.dark.d500 : 'white',
    },
    topSpace: {
      height: normalize(32),
    },
    headerBack: {
      paddingHorizontal: normalize(24),
      marginBottom: normalize(32),
    },
    formContainer: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      zIndex: 100,
      backgroundColor: semantic.fill.f03,
      borderTopEndRadius: normalize(20),
      borderTopStartRadius: normalize(20),
    },
    alignCenter: {
      alignItems: 'center',
    },
    divider: {
      borderWidth: normalize(4),
      borderColor: semantic.fill.f01,
      width: normalize(60),
      borderRadius: normalize(100),
    },
    fontBold: {
      fontSize: normalize(18),
      fontWeight: '700',
      color: semantic.text.black,
      marginVertical: normalize(24),
    },
    dividerLight: {
      borderWidth: 1,
      borderColor: semantic.fill.f01,
      width: '100%',
      opacity: 0.05,
      marginBottom: normalize(24),
    },
    checkboxContainer: {
      marginBottom: normalize(24),
      flexDirection: 'row',
      alignItems: 'center',
    },
  });
