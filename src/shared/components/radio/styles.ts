import { StyleSheet, ViewStyle } from "react-native";
import { semantic } from "@/shared/constants/colors";
import { normalize } from "@/shared/helpers";

const defaultContainer: ViewStyle = {
  borderWidth: 1,
  width: normalize(25),
  height: normalize(25),
  borderRadius: 150,
  justifyContent: 'center',
  alignItems: 'center',
}

const defaultRadioButton: ViewStyle = {
  width: normalize(15),
  backgroundColor: semantic.background.dark.d500,
  borderRadius: 150,
}

export const styles = StyleSheet.create({
  containerRadioButton: {
    ...defaultContainer,
    borderColor: semantic.text.grey,
  },
  containerRadioButtonActive: {
    ...defaultContainer,
    borderColor: semantic.background.dark.d500
  },
  innerRadioButton: {
    ...defaultRadioButton,
    height: 0,
  },
  innerRadioButtonActive: {
    ...defaultRadioButton,
    height: normalize(15)
  }
})
