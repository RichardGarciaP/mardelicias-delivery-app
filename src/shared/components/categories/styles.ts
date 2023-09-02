import {StyleSheet} from 'react-native';
import {normalize} from '@/shared/helpers';
import { palette, semantic } from "@/shared/constants/colors";

export const _styles = (isDarkMode: boolean | undefined) => StyleSheet.create({
  parentContainer: {
    marginRight: normalize(14),
  },
  container: {
    borderColor: isDarkMode ? semantic.fill.f01 : '#EEEEEE',
    borderWidth: 1,
    paddingHorizontal: normalize(20),
    paddingVertical: normalize(12),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: normalize(20),
  },
  containerActive: {
    backgroundColor: palette.main.p500
  },
  image: {
    width: normalize(46),
    height: normalize(46),
  },
  categoryName: {
    textAlign: 'center',
    fontWeight: '700',
  },
  categoryNameActive: {
    color: semantic.text.white
  },
  listCategories: {
    marginTop: normalize(24),
  },
  allCategories: {
    justifyContent: 'center',
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
    flexDirection: 'row',
    height: normalize(52),
    borderRadius: normalize(8),
    marginTop: normalize(20),
  },
  textAll: {
    marginLeft: normalize(4),
    fontWeight: '700',
  },
});
