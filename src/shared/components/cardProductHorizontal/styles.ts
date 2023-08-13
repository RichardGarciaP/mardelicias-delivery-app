import { StyleSheet } from "react-native";
import { normalize } from "@/shared/helpers";
import { palette, semantic } from "@/shared/constants/colors";

export const _styles = (isDarkMode: boolean) => StyleSheet.create({
  container: {
    flexDirection: 'row',
    // flex: 1,
  },
  containerImage: {
    width: normalize(120),
    height: normalize(120),
    backgroundColor: isDarkMode ? semantic.fill.f01 : semantic.fill.f04,
    borderRadius: normalize(16)
  },
  image: {
    width: '100%',
    height: normalize(120)
  },
  name: {
    fontSize: normalize(18),
    fontWeight: '700',
    color: isDarkMode ? semantic.text.white : semantic.text.black,
    maxHeight: normalize(50),
  },
  category: {
    fontSize: normalize(16),
    color: semantic.text.grey,
    marginVertical: normalize(8)
  },
  price: {
    marginTop: normalize(14),
    fontSize: normalize(20),
    fontWeight: '700'
  },
  totalPrice: {
    color: palette.main.p500,
    fontSize: normalize(20),
    fontWeight: '700'
  },
  containerInfo: {
    flex: 1,
    marginLeft: normalize(18)
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  containerCant: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cant: {
    backgroundColor: palette.main.p500,
    width: normalize(24),
    height: normalize(24),
    borderRadius: 150,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cantText: {
    color: semantic.text.white,
    fontSize: normalize(16),
    fontWeight: '700'
  }
})
