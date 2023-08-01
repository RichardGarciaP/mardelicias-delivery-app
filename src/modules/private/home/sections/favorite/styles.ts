import { StyleSheet } from "react-native";
import { normalize } from "@/shared/helpers";
import { semantic } from "@/shared/constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: normalize(24)
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: normalize(32)
  },
  total: {
    fontWeight: '700',
    fontSize: normalize(18)
  },
  sort: {
    fontSize: normalize(18),
    color: semantic.text.grey
  },
  separator: {
    width: normalize(4)
  }
})
