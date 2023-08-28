import React from 'react';
import { ActivityIndicator, TouchableOpacity } from "react-native";
import {_styles} from './styles';
import Typography from '@/shared/components/typography';
import {GestureResponderEvent} from 'react-native/Libraries/Types/CoreEventTypes';
import { semantic } from "@/shared/constants/colors";

interface ButtonProps {
  disabled?: boolean | undefined;
  leftIcon?: React.ReactNode | undefined;
  title?: string | undefined;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  loading?: boolean | undefined;
  sm?: boolean
}
export default function Button({
  disabled,
  leftIcon,
  title = 'Done',
  onPress,
  loading,
  sm,
}: ButtonProps) {
  const styles = _styles(disabled, sm);
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress} style={styles.container}>
      {leftIcon && leftIcon}
      {loading ? (
        <ActivityIndicator color={semantic.background.white.w500} />
      ) : (
        <Typography style={styles.text}>{title}</Typography>
      )}
    </TouchableOpacity>
  );
}
