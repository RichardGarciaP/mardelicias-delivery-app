import { StyleSheet } from "react-native";
import { normalize } from "@/shared/helpers";
import { palette, semantic } from "@/shared/constants/colors";

export const _styles = (isDarkMode: boolean) => StyleSheet.create({
  card: {
    borderRadius: normalize(16),
    borderWidth: 2,
    borderColor: isDarkMode ? semantic.fill.f01 : semantic.fill.f04,
    paddingVertical: normalize(24),
    paddingHorizontal: normalize(12),
    marginVertical: normalize(32)
  },
  containerCardStatus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    width: normalize(32),
    height: normalize(32),
    tintColor: palette.main.p500
  },
  containerIcon: {
    padding: normalize(16),
    backgroundColor: isDarkMode ? semantic.fill.f01 : semantic.fill.f04,
    borderRadius: normalize(16)
  },
  containerInfo: {
    marginLeft: normalize(12)
  },
  title: {
    fontSize: normalize(16),
    fontWeight: '700',
  },
  status: {
    color: palette.main.p500,
    marginTop: normalize(6)
  },
  containerInfoDelivery: {
    marginTop: normalize(12),
    flexDirection: 'row',
    alignItems: 'center'
  },
  titleSection: {
    color: semantic.text.grey
  },
  valueSection: {
    fontWeight: '700',
    fontSize: normalize(16),
    marginTop: normalize(14)
  },
  containerIcons: {
    alignItems: 'center'
  },
  iconActive: {
    width: normalize(40),
    height: normalize(40),
    tintColor: palette.main.p500
  },
  iconInActive: {
    width: normalize(40),
    height: normalize(40),
    tintColor: semantic.fill.f04
  },
  containerTrack: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  checkIcon: {
    width: normalize(16),
    height: normalize(16)
  },
  checkIconInactive: {
    width: normalize(16),
    height: normalize(16),
    tintColor: semantic.text.grey
  },
  containerCheckActive: {
    marginTop: normalize(20),
    backgroundColor: palette.main.p500,
    alignItems: 'center',
    borderRadius: 150,
    justifyContent: 'center',
    width: normalize(20),
    height: normalize(20)
  },
  containerCheckInActive: {
    marginTop: normalize(20),
    backgroundColor: semantic.fill.f04,
    alignItems: 'center',
    borderRadius: 150,
    justifyContent: 'center',
    width: normalize(20),
    height: normalize(20)
  },
  titleHistory: {
    marginVertical: normalize(32),
    textAlign: 'center',
    fontSize: normalize(16),
    fontWeight: '700'
  },
  containerStepHistory: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: normalize(18)
  },
  titleHistoryStep: {
    fontWeight: '700',
    marginBottom: normalize(8)
  }
})
