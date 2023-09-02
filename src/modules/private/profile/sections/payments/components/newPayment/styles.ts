import {semantic} from '@/shared/constants/colors';
import {normalize} from '@/shared/helpers';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: normalize(24),
  },
  card: {
    backgroundColor: semantic.fill.f01,
    height: normalize(222),
    borderRadius: normalize(20),
    paddingHorizontal: normalize(12),
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: normalize(32),
    marginBottom: normalize(8),
  },
  textBold: {
    fontWeight: '700',
    color: semantic.text.white,
    fontSize: normalize(16),
  },
  dotsContainer: {
    flexDirection: 'row',
    gap: normalize(8),
    alignItems: 'flex-start',
    width: '100%',
  },
  bigDot: {
    width: normalize(12),
    height: normalize(12),
    borderRadius: normalize(6),
    backgroundColor: semantic.fill.f03,
  },
  smallDot: {
    width: normalize(4),
    height: normalize(4),
    borderRadius: normalize(6),
    backgroundColor: semantic.fill.f03,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    flex: 1,
  },
  textLight: {
    fontWeight: '400',
    color: semantic.text.white,
    fontSize: normalize(12),
  },
});
