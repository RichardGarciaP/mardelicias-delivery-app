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
      width: '100%',
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
      marginBottom: normalize(24),
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
    textError: {
      color: 'red',
    },
    mapContainer: {
      height: '100%',
      width: '100%',
      position: 'relative',
    },
    map: {
      height: '100%',
      width: '100%',
    },
    marker: {
      height: 55,
      width: 55,
    },
    markerFixed: {
      left: '50%',
      marginLeft: -24,
      marginTop: -48,
      position: 'absolute',
      top: '50%',
    },
    formControl: {
      marginBottom: normalize(24),
    },
  });
