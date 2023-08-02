import {StyleSheet} from 'react-native';
import {normalize} from '@/shared/helpers';
import {semantic} from '@/shared/constants/colors';

const btn = {
  width: normalize(24),
  height: normalize(24),
};

const icons = {
  width: normalize(24),
  height: normalize(24),
};
export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  value: {
    fontSize: normalize(18),
    marginHorizontal: normalize(8),
    width: normalize(24),
    textAlign: 'center',
    alignSelf: 'center',
  },
  btnReduce: {
    ...btn,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnAument: {
    ...btn,
    borderRadius: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  minus: {
    ...icons,
  },
  plus: {
    ...icons,
  },
});
