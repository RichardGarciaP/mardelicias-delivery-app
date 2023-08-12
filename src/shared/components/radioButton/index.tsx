import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import {_styles} from './styles';
import Typography from '@/shared/components/typography';
import Radio from "@/shared/components/radio";
export interface RadioButtonOption {
  id: string;
  label?: string;
  active: boolean;
  CustomLabel?: Element;
}

interface RadioButtonProps {
  onChange?: any;
  option: RadioButtonOption;
  CustomLabel?: React.JSXElementConstructor<any>;
}
export default function RadioButton({
  option,
  onChange,
  CustomLabel,
}: RadioButtonProps) {
  const styles = _styles(option.active);
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => onChange(option)}
      style={styles.container}>
      {CustomLabel && <CustomLabel />}
      {option.label && (
        <Typography style={styles.label}>{option.label}</Typography>
      )}
      {option.CustomLabel && <>{option.CustomLabel}</>}
      <Radio active={option.active} />
      {/*<View style={styles.containerRadioButton}>
        <View style={styles.innerRadioButton} />
      </View>*/}
    </TouchableOpacity>
  );
}
