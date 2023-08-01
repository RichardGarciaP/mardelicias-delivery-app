import React from 'react';
import {Image} from 'react-native';
import {ImageSourcePropType} from 'react-native/Libraries/Image/Image';
import {_styles} from './styles';
import { StyleProp } from "react-native/Libraries/StyleSheet/StyleSheet";
import { ImageStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";

interface IconProps {
  icon: ImageSourcePropType;
  width?: number | undefined;
  height?: number | undefined;
  customStyles?: StyleProp<ImageStyle> | undefined;
}
export default function Icon({icon, width, height, customStyles}: IconProps) {
  const styles = _styles({width, height});
  return <Image style={[styles.icon, customStyles]} source={icon} />;
}
