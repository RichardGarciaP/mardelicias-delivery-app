import React from 'react';
import {Text} from 'react-native';
import {GestureResponderEvent} from 'react-native/Libraries/Types/CoreEventTypes';
import {StyleProp} from 'react-native/Libraries/StyleSheet/StyleSheet';
import {TextStyle} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
import {_styles} from './styles';
import {useTranslation} from 'react-i18next';
import '@/shared/i18n/config';
import useDarkMode from "@/shared/hooks/useDarkMode";

interface TypographyProps {
  allowFontScaling?: boolean | undefined;
  children?: string | string[] | React.ReactNode;
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip' | undefined;
  id?: string | undefined;
  lineBreakMode?: 'head' | 'middle' | 'tail' | 'clip' | undefined;
  numberOfLines?: number | undefined;
  /** This function is called on press.
   * Text intrinsically supports press handling with a default highlight state
   * (which can be disabled with suppressHighlighting). **/
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  onPressIn?: ((event: GestureResponderEvent) => void) | undefined;
  onPressOut?: ((event: GestureResponderEvent) => void) | undefined;

  /**
   * This function is called on long press.
   * e.g., `onLongPress={this.increaseSize}>``
   */
  onLongPress?: ((event: GestureResponderEvent) => void) | undefined;
  style?: StyleProp<TextStyle> | undefined;
  translate?: boolean | undefined;
}
export default function Typography({
  children,
  style,
  translate = true,
  numberOfLines,
  onPress,
}: TypographyProps) {
  const {isDarkMode} = useDarkMode()
  const {t} = useTranslation();
  const styles = _styles(isDarkMode)
  if (!translate) {
    return (
      <Text onPress={onPress} numberOfLines={numberOfLines} style={[styles.text, style]}>
        {children}
      </Text>
    );
  }

  return (
    <Text onPress={onPress} numberOfLines={numberOfLines} style={[styles.text, style]}>
      {t(children)}
    </Text>
  );
}
