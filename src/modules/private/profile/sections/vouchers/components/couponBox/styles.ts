import {semantic} from '@/shared/constants/colors';
import {normalize} from '@/shared/helpers';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: normalize(200),
    width: '100%',
    borderWidth: 1,
    borderRadius: normalize(20),
    overflow: 'hidden',
    marginTop: normalize(20),
  },
  upperPart: {
    flex: 0.8,
    borderBottomLeftRadius: normalize(20),
    borderBottomRightRadius: normalize(20),
    paddingHorizontal: normalize(20),
  },
  divider: {
    marginVertical: normalize(10),
    width: '100%',
    borderTopWidth: 2,
    borderColor: semantic.fill.f04,
    opacity: 0.5,
    borderStyle: 'dashed',
  },
  vocherInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomPart: {
    flex: 0.4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: normalize(20),
  },
  lightText: {
    color: semantic.text.grey,
    fontWeight: '400',
    fontSize: 12,
  },
  boldText: {
    color: semantic.text.grey,
    fontWeight: '700',
    fontSize: 16,
  },
});
