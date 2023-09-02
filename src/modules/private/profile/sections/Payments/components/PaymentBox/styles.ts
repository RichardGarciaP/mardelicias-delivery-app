import {palette, semantic} from '@/shared/constants/colors';
import {normalize} from '@/shared/helpers';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: normalize(12),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: semantic.fill.f04,
    paddingVertical: normalize(20),
    borderRadius: normalize(12),
    marginVertical: normalize(10),
  },
  changeButton: {
    color: palette.main.p500,
    fontWeight: '700',
    fontSize: 14,
  },
  imageContainer: {
    width: normalize(60),
    height: normalize(20),
  },
});
