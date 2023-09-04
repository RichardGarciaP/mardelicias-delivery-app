import {StyleSheet} from 'react-native';
import {normalize} from '@/shared/helpers';
import {semantic} from '@/shared/constants/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#E9E9E9',
    padding: normalize(20),
  },
  title: {
    fontWeight: '700',
    fontSize: normalize(16),
  },
  message: {
    fontSize: normalize(16),
    fontWeight: '400',
  },
  containerCount: {
    height: normalize(24),
    marginTop: normalize(5),
    paddingVertical: normalize(4),
    paddingHorizontal: normalize(8),
    backgroundColor: semantic.background.dark.d500,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: normalize(8),
  },
  textCount: {
    color: semantic.text.white,
    textAlign: 'center',
    fontSize: normalize(12),
  },
});
