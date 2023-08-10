import {StyleSheet} from 'react-native'
import { normalize } from "@/shared/helpers";
import { semantic } from "@/shared/constants/colors";

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatar: {
    width: normalize(60),
    height: normalize(60),
    marginRight: normalize(12)
  },
  name: {
    fontSize: normalize(16),
    fontWeight: '700'
  },
  date: {
    color: semantic.text.grey,
    fontSize: normalize(12),
    marginTop: normalize(8)
  },
  valueReview: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: normalize(18),
    paddingHorizontal: normalize(20),
    paddingVertical: normalize(6),
    marginHorizontal: normalize(8),
    backgroundColor: semantic.fill.f04,
  },
  textReview: {
    fontSize: normalize(18),
    fontWeight: '700',
    marginLeft: normalize(4)
  },
  description: {
    color: semantic.text.grey,
    marginBottom: normalize(12)
  },
  valueLike: {
    color: semantic.text.grey,
    fontSize: normalize(16),
    marginLeft: normalize(6),
    fontWeight: '500'
  }
})
