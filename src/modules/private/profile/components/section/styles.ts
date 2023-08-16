import {normalize} from '@/shared/helpers';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  title: {
    fontWeight: '700',
    fontSize: 16,
    color: '#7A8499',
    marginBottom: normalize(10),
  },
  rowContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: normalize(20),
  },
  name: {
    fontWeight: '700',
    fontSize: 14,
    marginLeft: normalize(10),
  },
});
