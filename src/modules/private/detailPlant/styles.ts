import { StyleSheet } from "react-native";
import { normalize } from "@/shared/helpers";
import { semantic } from "@/shared/constants/colors";

export const _styles = (isDarkMode: boolean) => StyleSheet.create({
  container: {
    paddingHorizontal: normalize(24),
    flex: 1,
  },
  containerImage: {
    width: '100%',
    height: normalize(325),
    marginTop: normalize(10)
  },
  image: {
    width: '100%',
    height: normalize(325)
  },
  containerName: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: normalize(24)
  },
  name: {
    fontSize: normalize(24),
    fontWeight: '700'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  containerCantSold: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: normalize(20)
  },
  sold: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: semantic.fill.f04,
    paddingHorizontal: normalize(12),
    paddingVertical: normalize(4),
    borderRadius: normalize(4)
  },
  separator: {
    width: normalize(12)
  },
  space: {
    width: normalize(2)
  },
  sizeStar: {
    width: normalize(15),
    height: normalize(15),
  },
  containerDescription: {
    marginTop: normalize(40)
  },
  descriptionTitle: {
    fontSize: normalize(18),
    fontWeight: '700'
  },
  description: {
    lineHeight: 16,
    marginTop: normalize(10)
  },
  quantity: {
    fontWeight: '700',
    fontSize: normalize(18)
  },
  valueVariant: {
    marginTop: normalize(18),
    fontWeight: '700'
  },
  price: {
    fontSize: normalize(18),
    fontWeight: '700'
  },
  total: {
    fontSize: normalize(24),
    fontWeight: '700',
    marginTop: normalize(12)
  }
})
