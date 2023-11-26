import {StyleSheet} from 'react-native';
import {semantic} from '@/shared/constants/colors';

export const _styles = (height: number, loading: boolean | undefined) =>
  StyleSheet.create({
    container: {
      flex: 1,
      height,
      width: '100%',
      backgroundColor: 'rgba(255,255,255, 0.80)',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: loading ? 1000 : -10,
      justifyContent: 'center',
      opacity: loading ? 1 : 0,
    },
    text: {
      color: semantic.text.black,
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      fontStyle: 'italic',
    },
  });
