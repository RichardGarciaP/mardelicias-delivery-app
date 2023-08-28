import { StyleSheet } from "react-native";
import { semantic } from "@/shared/constants/colors";
import { normalize } from "@/shared/helpers";

export const styles = StyleSheet.create({
  resume: {
    borderWidth: 2,
    borderColor: semantic.fill.f04,
    borderRadius: normalize(16),
    paddingVertical: normalize(20),
    paddingHorizontal: normalize(12),
    marginTop: normalize(32)
  },
  containerResumeText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: normalize(6)
  }
})
