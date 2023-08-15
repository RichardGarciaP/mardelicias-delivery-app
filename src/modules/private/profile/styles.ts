import {normalize} from '@/shared/helpers';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: normalize(30),
    flexDirection: 'column',
  },
  profileText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: normalize(20),
  },
  image: {
    width: normalize(60),
    height: normalize(60),
    marginRight: normalize(12),
  },
});
