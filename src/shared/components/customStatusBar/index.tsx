import React from "react";
import { StatusBar, View } from "react-native";
import {styles} from './styles'
import { StatusBarStyle } from "react-native/Libraries/Components/StatusBar/StatusBar";
import useDarkMode from "@/shared/hooks/useDarkMode";
import { semantic } from "@/shared/constants/colors";

interface CustomStatusBarProps {
  backgroundColor?: string;
  barStyle?: StatusBarStyle
}
export default function CustomStatusBar({backgroundColor, barStyle}: CustomStatusBarProps) {
  const {isDarkMode} = useDarkMode()
  const _backgroundColor = backgroundColor || (isDarkMode ? semantic.background.dark.d500 : 'white')
  const _barStyle = barStyle || (isDarkMode ? 'light-content' : 'dark-content')
  return (
    <View style={[styles.statusBar, {backgroundColor: _backgroundColor}]}>
      <StatusBar
        barStyle={_barStyle}
        translucent
        backgroundColor={backgroundColor}
      />
    </View>
  );
}
