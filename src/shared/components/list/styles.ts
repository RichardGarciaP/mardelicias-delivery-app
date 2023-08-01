import {StyleSheet} from 'react-native';

export const _styles = (between: boolean | undefined) =>
  StyleSheet.create({
    containerList: {
      flexDirection: 'row',
      justifyContent: between ? 'space-between' : 'flex-start',
      alignItems: 'center',
    },
  });
