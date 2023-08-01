import { StyleSheet } from "react-native";
import { normalize } from "@/shared/helpers";
import { palette } from "@/shared/constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: normalize(24)
  },
  form: {
    marginTop: normalize(32)
  },
  formControl: {
    marginBottom: normalize(24)
  },
  containerLink: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  alreadyAccount: {
    fontSize: normalize(16)
  },
  link: {
    marginLeft: normalize(6),
    color: palette.main.p500,
    fontWeight: '700',
    fontSize: normalize(16)
  }
})
