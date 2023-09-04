import {StyleSheet} from 'react-native';
import {normalize} from '@/shared/helpers';

export const styles = StyleSheet.create({
  header: {
    paddingVertical: normalize(24),
    borderBottomWidth: 1,
    borderBottomColor: '#E9E9E9',
  },
  title: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: normalize(16),
  },
});
