import {StyleSheet} from 'react-native';
import {normalize} from '@/shared/helpers';

export const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingHorizontal: normalize(10),
  },
  footer: {
    paddingHorizontal: normalize(24),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerInput: {
    flex: 0.98,
  },
  containerIcon: {
    width: normalize(48),
    height: normalize(48),
    backgroundColor: '#F4F4F4',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 150,
  },
  icon: {
    tintColor: 'rgba(156, 166, 169, 1)',
  },
});
