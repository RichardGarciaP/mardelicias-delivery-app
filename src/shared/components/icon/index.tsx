import React from 'react';
import {Image} from 'react-native';
import {ImageSourcePropType} from 'react-native/Libraries/Image/Image';
import {_styles} from './styles';
import { StyleProp } from "react-native/Libraries/StyleSheet/StyleSheet";
import { ImageStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";
import useDarkMode from "@/shared/hooks/useDarkMode";

interface IconProps {
  icon: ImageSourcePropType;
  width?: number | undefined;
  height?: number | undefined;
  customStyles?: StyleProp<ImageStyle> | undefined;
}
export default function Icon({icon, width, height, customStyles}: IconProps) {
  const {isDarkMode} = useDarkMode()
  const styles = _styles({width, height, isDarkMode});
  return <Image style={[styles.icon, customStyles]} source={icon} />;
}
